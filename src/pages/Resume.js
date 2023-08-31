import React from 'react';
import resume from'../media/EricaFuResume.pdf'
import './Resume.css'

function Heading(main, sub, link, timeline) {
  return  <div className="space-between">
            <div className="titles">
              {link === undefined || link === "" ? 
                <>
                  <h3>{main}</h3><h4>{sub}</h4>
                </>
                : 
                <>
                  <h3><a href={link} target='_blank'>{main}</a></h3><h4>{sub}</h4>
                </>
              }
            </div>
            { timeline === undefined ?
              <></>
              : 
              <h5>{timeline}</h5>
            }
          </div>
}

function Resume() {
  return (
    <div className="page-body body body-small resume-container">
    <div className="resume-category">
      <div className="space-between">
        <h1><b>Erica Fu</b></h1>
        <a href={ resume } target="_blank">
          <button>View as PDF</button>
        </a> 
      </div>
      <p>
        <div>ericafu.me</div>
        <div>
          <a target='_blank'
              href='https://www.linkedin.com/in/erica-fu-15b3a61b9/'>
              linkedin.com/in/ericawfu/
          </a>
        </div>
        <div>
          <a target='_blank'
              href='mailto:efu@andrew.cmu.edu'>
              efu@andrew.cmu.edu
          </a>
        </div>
      </p>
    </div>
    <div className="resume-category">
      <h2>Education</h2>
      <div className="resume-section">
        <div>{Heading("Carnegie Mellon University", "", "", "Aug 2020 - May 2024")}</div>
        <ul>
          <li>B.S. in Information Systems & Human Computer Interaction</li>
          <li>Minor in Design, CS, & Soft Technology</li>
          <li>GPA: 3.88/4.0, Dean’s List 6 semesters</li>
        </ul>
      </div>
    </div>
    <div className="resume-category">
      <h2>Experience</h2>
      <div className="resume-section">
        <div>{Heading("Equinix", "UX Design Intern", "https://equinix.com/", "May - Aug 2023")}</div>
        <ul>
          <li>To identify potential design improvements, evaluated the performance of a new feature with Amplitude analytics and FullStory</li>
          <li>Redesigned and simplified network connection ordering workflow and UI for network engineers to connect assets to Cloud Service Providers </li>
          <li>Collaborated with engineering teams to identify UI inconsistencies and business patterns; created a product-level library with Figma components and handoff files for efficient design and development</li>
          <li>Created and tested Figma prototypes to test library components and two information layouts through think-aloud studies with customers; inspired product team to further study the information layouts through A/B testing</li>
        </ul>
      </div>
      <div className="resume-section">
        <div>{Heading("Zeno - DIG and CHIMPs Lab", "UX Designer", "https://zenoml.com/", "May 2022 - present")}</div>
        <ul>
          <li>In the exploratory phase, conducted desk research, comparative analysis of ML evaluation tools, and expert interviews with ML engineers</li>
          <li>Designed user flows and interfaces for slice-based ML evaluation</li>
          <li>Validated designs through group usability testing to determine if users find value in the product and identify where to improve the experience</li>
        </ul>
      </div>
      <div className="resume-section">
        <div>{Heading("Project Theia", "Technology Consultant", "https://projecttheia.org/", "Jan - May 2023")}</div>
        <ul>
          <li>Designed a solution for Project Theia, a non-profit who provided oculoplastic medical and surgical care to underserved global communities</li>
          <li>Implemented a communication system by leveraging Slack that allowed for private and public communication streams and educational resource sharing after evaluating varying platforms</li>
          <li>Tested the system with medical professionals in Ghana and Honduras to validate the feasibility of our solution with global stakeholders</li>
        </ul>
      </div>
      <div className="resume-section">
        <div>{Heading("Adulting 101 - CoEx and CHIMPs Lab", "Research Assistant", "https://coexlab.com/", "May 2021 - Aug 2022")}</div>
        <ul>
          <li>Researched how theory of planned behavior, embedded design, and social influence could encourage better cybersecurity behaviors</li>
          <li>Redesigned and programmed an iOS app with Figma, Xcode, and Swift</li>
          <li>Wrote adulting and cybersecurity tasks and study surveys</li>
          <li>Conducted a Wizard of Oz study with 12 participants to validate our theoretical foundation</li>
        </ul>
      </div>
      <div className="resume-section">
        <div>{Heading("Small Undergraduate Research Grant", "Independent Research", "https://crosscountryconnections.github.io/index.html", "May 2021 - Aug 2022")}</div>
        <ul>
          <li>Designed and engineered an interactive LED display that mirrored a matching display across the country; to be displayed at CMU Silicon Valley</li>
          <li>Investigated how playful tactile interactions would enhance remote communication</li>
          <li>Used Arduinos, Raspberry Pis, Fusion 360 to construct and connect the physical installations and Unity and Illustrator to digitally model the interaction</li>
        </ul>
      </div>
      <div className="resume-section">
        <div>{Heading("DAMO Academy", "Media Design Intern", "", "Jan 2019 - Jan 2020")}</div>
        <ul>
          <li>Designed and constructed an interactive wall for the DAMO lab, illustrating the history of human-computer interaction</li>
          <li>Used multimedia–Arduino, conductive paint, LED lights, speakers–to engage in multiple senses and demonstrate distinct ways humans can interact with computers</li>
          <li>Designed minimalistic icons on Photoshop to represent each of the events in history</li>
        </ul>
      </div>
      <div className="resume-section">
        <div>{Heading("Baobab Studios", "User Experience Intern", "https://www.baobabstudios.com/", "Summer 2018")}</div>
        <ul>
          <li>Conducted in-person usability testing for an Emmy-award winning VR animation studio to test interactive animation prototypes and understand user attitudes towards finalized projects</li>
          <li>Presented design suggestions for technical problems and conceptual misunderstandings users encountered</li>
        </ul>
      </div>
    </div>
    
    <div className="resume-category">
      <h2>Leadership</h2>
      <div className="resume-section">
        <div>{Heading("Design For America @ CMU", "President", "https://www.dfaxcmu.org/", "Sept 2020 - Present")}</div>
        <ul>
          <li>Collaborated with local nonprofits and professors to identify challenging social issues and advised 6 teams each year as they develop solutions</li>
          <li>Developed lesson content, exercises, and peer evaluation sessions on Human-Centered Design to teach 50 members</li>
          <li>Organized ImpactCMU to showcase and celebrate social-good work from CMU organizations and individuals</li>
        </ul>
      </div>
      <div className="resume-section">
        <div>{Heading("National Design for America", "DFA Fellow", "https://www.designforamerica.org/", "Aug 2023 - Present")}</div>
        <ul>
          <li>Interviewed DFA Alumni, who used the design process to help nonprofits, in UX to showcase the connection between HCD and UX industry work</li>
          <li>Problem-solved with other DFA studios to resolve leadership issues</li>
        </ul>
      </div>
      <div className="resume-section">
        <div>{Heading("Yarnivores", "Public Relations Chair", "https://www.instagram.com/cmuyarnivores/", "May 2023 - Present")}</div>
        <ul>
          <li>Designed Instagram posts and flyers to advertise fiber arts events</li>
        </ul>
      </div>
      <div className="resume-section">
        <div>{Heading("Women in Information Systems", "Mentor", "https://www.instagram.com/cmuyarnivores/", "May 2023 - Present")}</div>
        <ul>
          <li>Mentored 3 students by sharing personal experiences with HCI research, student organizations, and courses</li>
        </ul>
      </div>
      <div className="resume-section">
        <div>{Heading("Codementary", "Cofounder", "", "Jun 2018 - May 2020")}</div>
        <ul>
          <li>Created customized courses for 3rd-8th graders at three different coding levels</li>
          <li>Organized and taught weekly classes at three local libraries to classes of 15</li>
        </ul>
      </div>
      <div className="resume-section">
        <div>{Heading("Artism", "Volunteer", "", "Aug 2016 - May 2020")}</div>
        <ul>
          <li>Built strong personal connections with students with autism by introducing a new medium for expression and helping them communicate ideas through visual art</li>
          <li>Taught a new art project using color pencil every week</li>
        </ul>
      </div>
    </div>

    <div className="resume-category">
      <h2>Achievements</h2>
      <div className="resume-section">
        <div>{Heading("Publication", "", "", "")}</div>
        <p>A. Cabrera, E. Fu, et al. Zeno: An Interactive Framework for Behavioral Evaluation of Machine Learning. In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems (CHI '23).</p>
      </div>
      <div className="resume-section">
        <div>{Heading("Meeting of the Minds", "", "", "")}</div>
        <p>Award for Artistic Excellence</p>
      </div>
      <div className="resume-section">
        <div>{Heading("Keith Block Entrepreneurship Competition", "", "", "")}</div>
        <p>Second Place</p>
      </div>
      <div className="resume-section">
        <div>{Heading("HackCMU EchoAR", "", "", "")}</div>
        <p>Category Award</p>
      </div>
    </div>

    <div className="divider"></div>
  </div>
  );
}

export default Resume;