import React, {useState} from "react";
import csvUrl from "../media/PlayProjects.csv";
import { csvParse } from "d3-dsv";

import PlayProjectCard from "../components/PlayProjectCard/PlayProjectCard.js";

const categoryMap = {
    dev: 'Software design and development',
    jewelry: 'Jewelry',
    physicalcomputing: 'Physical computing',
    installation: 'Large scale installations',
    branding: 'Branding',
};

function toCategory(input) {
  const v = String(input ?? '').trim().toLowerCase();
  if (categoryMap[v]) {
    return categoryMap[v];
  }
  console.warn(`Unknown category "${input}", defaulting to "dev"`);
  return 'dev';
}

function parseTags(input) {
  return String(input ?? "")
    .replace(/["']/g, "") 
    .split("/")
    .map((s) => s.trim())
    .filter(Boolean);
}

function getImageUrl(imageURL) {
    const base = process.env.PUBLIC_URL || '';
    return `${base}/images/Play/${imageURL}`;
}
  
function Play() {
    const [playProjects, setPlayProjects] = React.useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    React.useEffect(() => {
        (async () => {
        const text = await fetch(csvUrl).then((r) => r.text());
        const rows = csvParse(text);
        console.log("[playProjects] count:", rows);

        const data = rows
            .map((r) => {
                const rawCategory = String(r.category ?? r.Category ?? '').trim().toLowerCase();
                const yearVal = Number.parseInt(String(r.year ?? r.Year ?? ""), 10);
                return {
                    id: String(r.id ?? r.ID ?? "").trim(),
                    title: String(r.title ?? r.Title ?? "").trim(),
                    tags: parseTags(r.tags ?? r.Tags),
                    category: rawCategory, // <- raw value used for filtering
                    categoryLabel: toCategory(rawCategory), // <- user-facing label
                    year: yearVal, // ← numeric year
                    yearLabel: String(r.year ?? r.Year ?? "").trim(),
                    description: String(r.description ?? r.Description ?? "").trim().replace(/["']/g, ""),
                    imageURL: String(r.imageURL ?? r.ImageURL ?? "").trim(),
                    awards: String(r.awards ?? r.Awards ?? "").trim(),
                };
            })
            .filter((r) => r.id && r.title && Number.isFinite(r.year))
            .sort((a, b) => b.year - a.year);

        setPlayProjects(data);
        console.log("[playProjects] count:", data);
        console.log("[playProjects] category:", data.map((p) => p.category));
        })().catch(console.error);
    }, []);
        
    // Filter projects by selected category
    const filteredProjects =
        selectedCategory === 'all'
            ? playProjects
            : playProjects.filter(p => p.category === selectedCategory);

    const categoryCounts = playProjects.reduce((acc, project) => {
        const cat = project.category;
        acc[cat] = (acc[cat] || 0) + 1;
        return acc;
    }, {});
            
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;

    const scrollToTop = () => {
		window.scrollTo({top: 0, behavior: 'auto'});
	};

    return (
        <div>      
            <div 
                className="flex-row play-category-select bordered-section" 
                style={{position:'sticky',top:navbarHeight,zIndex: 10,background:'var(--white-dark)'}}
                onClick={scrollToTop}
            >
                <a 
                    onClick={() => setSelectedCategory("all")} 
                    className={`bordered-section nav-bar-links ${selectedCategory==='all' ? 'selected-category' : ''}`}                
                >
                    <p className="caption">All ({playProjects.length})</p>
                </a>
                {Object.entries(categoryMap).map(([id, label]) => (
                <a
                    key={id}
                    onClick={() => setSelectedCategory(id)}
                    className={`bordered-section nav-bar-links ${selectedCategory===id ? 'selected-category' : ''}`}
                >
                    <p className="caption">{label} ({categoryCounts[id] || 0})</p>
                </a>
                ))}
            </div>
            <div
                className={`play-project-grid ${
                    selectedCategory !== 'all' ? 'two-col' : 'three-col'
                }`}
            >
                {filteredProjects.map((project) => (
                    <PlayProjectCard 
                        key={project.id} 
                        title={project.title}
                        tags={project.tags}
                        category={project.category}
                        year={project.yearLabel}
                        description={project.description}
                        image={getImageUrl(project.imageURL)}
                        awards={project.awards}
                        selectedCategory={selectedCategory}
                    />
                ))}
            </div>
        </div>
    )
}

export default Play;