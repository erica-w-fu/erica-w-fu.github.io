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
        <li>Minor in Human-Computer Interaction, Design, and Computer Science</li>
        <li>GPA: 3.8/4.0, Dean's List 4 semesters</li>
      </ul>
    </Section>
    <Section
      title="Experience"
      style="capitalized"
    >
    </Section>
    <Section
      title="May 2021 - Aug 2022"
      style="dates"
    >
      <div className="link">
        {Heading("HCI Research Assistant", "Adulting 101, CoEx and CHIMPs Lab", "https://socialcybersecurity.org/", "Pittsburgh, PA")}
        <ul>
          <li>Researched how theory of planned behavior, embedded design, and social influence could encourage better cybersecurity behaviors</li>
          <li>Redesigned and programmed an iOS app with Figma, Xcode, and Swift</li>
          <li>Wrote adulting and cybersecurity tasks and study surveys</li>
          <li>Conducted a Wizard of Oz study with 12 participants to validate our theoretical foundation</li>
        </ul>
      </div>
    </Section>
    <Section
      title="May 2021 - Aug 2022"
      style="dates"
    >
      <div className="link">
        {Heading("Independent Research", "Small Undergraduate Research Grant", "https://crosscountryconnections.github.io/index.html", "Pittsburgh, PA")}
        <ul>
          <li>Designed and engineered an interactive LED display that mirrored a matching display across the country; to be displayed at CMU Silicon Valley</li>
          <li>Investigated how playful tactile interactions would enhance remote communication</li>
          <li>Used Arduinos, Raspberry Pis, Fusion 360 to construct and connect the physical installations and Unity and Illustrator to digitally model the interaction</li>
        </ul>
      </div>
    </Section>
    <Section
      title="Jan 2019 - Jan 2020"
      style="dates"
    >
      {Heading("Media Design Intern", "DAMO Academy", "", "San Mateo, CA")}
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
          <li>Collaborated with local community organizations and professors to identify challenging social issues and advise project teams as they develop solutions</li>
          <li>Organized and directed studio and executive meetings</li>
          <li>Collaborated with professors and local community partners to identify challenging social issues and advise members as they develop solutions</li>
          <li>Developed lesson content, exercises, and peer evaluation sessions on Human-Centered Design to teach 40 members</li>
        </ul>
    </Section>
    <Section
      title="Sep 2021 - present"
      style="dates"
    >
        {Heading("Mentor", "Women in Information Systems", "", "Pittsburgh, PA")}
        <ul>
          <li>Mentored 2 students by sharing personal experiences with HCI research, student organizations, and courses</li>
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

    <Section
      title="Skills"
      style="capitalized"
    >
      <table>
        <tr>
          <th>Design</th>
          <th>User Testing</th>
          <th>Full-Stack</th>
          <th>Programming</th>
        </tr>
        <tr>
          <td>Figma</td>
          <td>Contextual Inquiries </td>
          <td>CSS • HTML • JS</td>
          <td>C • Java</td>
        </tr>
        <tr>
          <td>Adobe Illustrator</td>
          <td>Remote testing</td>
          <td>React</td>
          <td>Unix • Git</td>
        </tr>
        <tr>
          <td>Adobe Photoshop</td>
          <td>Survey and analysis</td>
          <td>Swift • Xcode</td>
          <td>SQL</td>
        </tr>
      </table>
    </Section>
  </div>
  );
}

export default Resume;