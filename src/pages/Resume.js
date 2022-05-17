import React from 'react';
import Section from '../components/ResumeSection/ResumeSections.js';
import '../components/ResumeSection/ResumeSections.css';
import resume from'../media/resume.pdf'

function Heading(main, sub, link, location) {
  return  <div>
            <h3 class="bolded-title same-line">{main}</h3>
            {link === undefined || link === "" ? 
              <h4 class="faded-title same-line"> {sub}</h4>
              : 
              <h4 class="faded-title same-line"> <a href={link} target='_blank'>{sub}</a></h4>
            }
            { location === undefined ?
              <></>
              : 
              <div class="location same-line">{location}</div>
            }
          </div>
}

function Resume() {
  return (
    <div className="page-body body">
    <div className="right-align">
      <a href={ resume } target="_blank">
        <button>View as PDF</button>
      </a> 
    </div>
    <div className="clear-float"></div>
    <Section
      title="Erica Fu"
      style="name"
    >
        <div className="contact">
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
          <div>+1 (650) 392-9822</div>
        </div>
    </Section>
    <Section
      title="Education"
      style="capitalized"
    >
    </Section>
    <Section
      title="Aug 2020 - May 2024"
      style="dates"
    >
      {Heading("Carnegie Mellon University", "B.S. in Information Systems")}
      <ul>
        <li>Minor in Human-Computer Interaction, Computer Science, and Design</li>
        <li>GPA: 3.8/4.0, Dean's List 3 semesters</li>
      </ul>
    </Section>
    <Section 
      title="Relevant Coursework"
      style="dates"
    >
       <table>
        <tr>
          <th>Information Systems</th>
          <th>HCI</th>
          <th>Computer Science</th>
          <th>Design</th>
        </tr>
        <tr>
          <td> 
            <ul>
              <li>Application Design and Development</li>
              <li>Database Design and Development</li>
              <li>Introduction to Information Systems</li>
            </ul>
          </td>
          <td><ul>
            <li>User Centered Research and Evaluation</li>
            <li>Designing Human Centered Software</li>
            <li>Interaction Design Overview</li>
          </ul></td>
          <td><ul>
            <li>Functional Programming</li>
            <li>Introduction to Computer Systems</li>
            <li>Data Structures and Algorithms</li>
          </ul></td>
          <td><ul>
            <li>Communication Design Fundamentals</li>
            <li>Product Design Fundamentals</li>
            <li>How People Work</li>
          </ul></td>
        </tr>
      </table>
    </Section>
    <Section
      title="Experience"
      style="capitalized"
    >
    </Section>
    <Section
      title="May 2021 - present"
      style="dates"
    >
      <div className="link">
        {Heading("HCI Research Assistant", "CoEx Lab", "https://socialcybersecurity.org/", "Pittsburgh, PA")}
        <ul>
          <li>Redesigned and programmed an iOS app with Xcode and Swift</li>
          <li>Researched how social influence could encourage better cybersecurity behaviors</li>
          <li>Researched different cybersecurity recommendations to write accurate and helpful tasks</li>
          <li>Conducted and evaluated the results of a pilot study where users participated in a 30-day adulting challenge to be implemented in the app</li>
        </ul>
      </div>
    </Section>
    <Section
      title="May 2021 - present"
      style="dates"
    >
      <div className="link">
        {Heading("Independent Research", "Small Undergraduate Research Grant", "https://crosscountryconnections.github.io/index.html", "Pittsburgh, PA")}
        <ul>
          <li>Designed and engineered an interactive LED display that mirrored a matching display across the country; to be displayed at CMU Silicon Valley</li>
          <li>Investigated how playful, tactile interactions would enhance remote communication</li>
          <li>Constructed and connected the physical installations across the country with Arduinos and Raspberry Pis</li>
          <li>Digitally modeled the intended interactions with Fusion 360, Unity, and Illustrator</li>
        </ul>
      </div>
    </Section>
    <Section
      title="Jan 2019 - Jan 2020"
      style="dates"
    >
      {Heading("Media Design Intern", "DAMO Academy", "", "Pittsburgh, PA")}
      <ul>
        <li>Designed and constructed an interactive wall for the DAMO lab, illustrating the history of human-computer interaction</li>
        <li>Used multimedia–Arduino, conductive paint, LED lights, speakers–to engage in multiple senses and demonstrate distinct ways humans can interact with computers</li>
        <li>Designed minimalistic icons on Photoshop to represent each of the events in history</li>
      </ul>
    </Section>
    <Section
      title="Summer 2018"
      style="dates"
    >
      {Heading("User Experience Intern", "Baobab Studios", "", "Redwood Shores, CA")}
      <ul>
        <li>Conducted in-person usability testing for an Emmy-award winning VR animation studio to test interactive animation prototypes and understand user attitudes towards finalized projects</li>
        <li>Presented design suggestions for technical problems and conceptual misunderstandings users encountered</li>
      </ul>
    </Section>

    <Section
      title="Leadership"
      style="capitalized"
    >
    </Section>
    <Section
      title="Sep 2020 - present"
      style="dates"
    >
        {Heading("President", "Design for America", "https://www.dfaxcmu.org/", "Pittsburgh, PA")}
        <ul>
          <li>Organized and directed studio and executive meetings</li>
          <li>Presented to 40 members the impact and process of human-centered design</li>
          <li>Collaborated with professors and local community partners to identify challenging social issues and advise members as they develop solutions</li>
          <li>Coordinated with National DFA to share successful practices and challenges</li>
        </ul>
    </Section>
    <Section
      title="Jun 2018 - May 2020"
      style="dates"
    >
      {Heading("Cofounder and Secretary", "Codementary", "", "San Jose, CA")}
      <ul>
        <li>Created customized courses for 3rd-8th graders at three different coding levels</li>
        <li>Organized and taught weekly classes at three local libraries to classes of 15</li>
      </ul>
    </Section>
    <Section
      title="Aug 2016 - May 2020"
      style="dates"
    >
      {Heading("Volunteer", "Artism", "", "San Jose, CA")}
      <ul>
        <li>Built strong personal connections with students with autism by introducing a new medium for expression and helping them communicate ideas through visual art</li>
        <li>Taught a new art project using color pencil every week</li>
      </ul>
    </Section>

    <Section
      title="Skills"
      style="capitalized"
    >
      <table>
        <tr>
          <th>Development</th>
          <th>Design</th>
          <th>Programming</th>
          <th>Website</th>
        </tr>
        <tr>
          <td>Swift • Xcode</td>
          <td>Figma</td>
          <td>Java • C</td>
          <td>JavaScript</td>
        </tr>
        <tr>
          <td>React</td>
          <td>Adobe Illustrator</td>
          <td>Unix • Git</td>
          <td>CSS • HTML</td>
        </tr>
        <tr>
          <td>Ruby</td>
          <td>Adobe InDesign</td>
          <td>SQL</td>
          <td>Wordpress</td>
        </tr>
      </table>
    </Section>

    <Section
      title="Achievements"
      style="capitalized"
    >
    </Section>
    <Section
      title="May 2022"
      style="dates"
    >
      {Heading("Meeting of the Minds", "Award for Artistic Excellence")}
    </Section>
    <Section
      title="Nov 2020"
      style="dates"
    >
      {Heading("Keith Block Entrepreneur Competition", "Second Place")}
    </Section>
    <Section
      title="Sep 2020"
      style="dates"
    >
      {Heading("HackCMU", "EchoAR Category Award")}
    </Section>
  </div>
  );
}

export default Resume;