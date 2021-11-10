import React from 'react';
import Section from '../ResumeSection/ResumeSections.js';
import '../ResumeSection/ResumeSections.css';

function Resume() {
  return (
    <>
    <Section
      title="Erica Fu"
      style="name"
    >
        <div>
          <p>efu@andrew.cmu.com</p>
          <p>+1 (650) 392-9822</p>
          <p>Pittsburgh, PA</p>
        </div>
    </Section>

    <Section
      title="Education"
      style="capitalized"
    >
    </Section>
    <Section
      title="May 2024"
      style="dates"
    >
      <h3 class="bolded-title same-line">Carnegie Mellon University  </h3><h4 class="faded-title same-line"> B.S. in Information Systems</h4>
      <ul>
        <li>GPA: 3.9/4.0, Dean's List 2 semesters</li>
        <li>Data Structures and Algorithms</li>
        <li>Introduction to Computer Systems</li>
        <li>Introduction to Information Systems</li>
        <li>Database Design and Development</li>
        <li>Designing Human Centered Software</li>
      </ul>
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
        <a href="Projects/#SwiftXCode">
          <h3 class="bolded-title same-line" target='_blank'>HCI Research Assistant  </h3><h4 class="faded-title same-line"> CoEx Lab</h4><div class="location same-line"> Pittsburgh, PA</div>
          <ul>
            <li>Redesigned and programmed an iOS app with Xcode and Swift</li>
            <li>Researched how social influence could encourage better cybersecurity behaviors</li>
            <li>Wrote and proofread adulting and cybersecurity tasks and study surveys</li>
            <li>Conducted and evaluated the results of a pilot study where users participated in a 30-day adulting challenge to be implemented in the app</li>
          </ul>
        </a>
      </div>
    </Section>
    <Section
      title="May 2021 - present"
      style="dates"
    >
      <div className="link">
        <a href="Projects/#PhysicalComputing" target='_blank'>
          <h3 class="bolded-title same-line">Independent Research  </h3><h4 class="faded-title same-line"> SURG</h4><div class="location same-line"> Pittsburgh, PA</div>
          <ul>
            <li>Designed and engineered an interactive LED display that mirrored a matching display across the country; to be displayed at CMU Silicon Valley</li>
            <li>Investigated how playful, tactile interactions would enhance remote communication</li>
            <li>Used Arduinos, Raspberry Pis, and Fusion 360 to construct and connect the physical installations and Unity and Illustrator to digitally model the interaction</li>
          </ul>
        </a>
      </div>
    </Section>
    <Section
      title="Jan 2019 - Jan 2020"
      style="dates"
    >
      <h3 class="bolded-title same-line">Media Design Intern  </h3><h4 class="faded-title same-line"> DAMO Academy</h4><div class="location same-line"> San Mateo, CA</div>
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
      <h3 class="bolded-title same-line">User Experience Intern  </h3><h4 class="faded-title same-line"> Baobab Studios</h4><div class="location same-line"> Redwood Shores, CA</div>
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
      <div className="link">
        <a href="https://www.dfaxcmu.org/" target='_blank'>
          <h3 class="bolded-title same-line">President  </h3><h4 class="faded-title same-line"> Design For America</h4><div class="location same-line"> Pittsburgh, PA</div>
          <ul>
            <li>Organized and directed studio and executive meetings</li>
            <li>Presented to 40 members the impact and process of human-centered design</li>
            <li>Collaborated with professors and local community partners to identify challenging social issues and advise members as they develop solutions</li>
            <li>Coordinated with National DFA to share successful practices and challenges</li>
          </ul>
        </a>
      </div>
    </Section>
    <Section
      title="Summer 2020"
      style="dates"
    >
      <h3 class="bolded-title same-line">Founder  </h3><h4 class="faded-title same-line"> Leland Artists for BLM</h4><div class="location same-line"> San Jose, CA</div>
      <ul>
        <li>Curated and sold prints from a catalogue of 67 pieces donated by 30 artists</li>
        <li>Raised over $1000 to donate to BLM organizations</li>
        <li>Strategized to use Instagram and Next-door to attract students and parents locally</li>
        <li>Designed eye-catching social media graphics and developed a website to display pieces, order information, and donations</li>
      </ul>
    </Section>
    <Section
      title="Jun 2018 - May 2020"
      style="dates"
    >
      <h3 class="bolded-title same-line">Cofounder and Secretary  </h3><h4 class="faded-title same-line"> Codementary</h4><div class="location same-line"> San Jose, CA</div>
      <ul>
        <li>Created customized courses for 3rd-8th graders at three different coding levels</li>
        <li>Organized and taught weekly classes at three local libraries to classes of 15</li>
      </ul>
    </Section>
    <Section
      title="Aug 2016 - May 2020"
      style="dates"
    >
      <h3 class="bolded-title same-line">Volunteer  </h3><h4 class="faded-title same-line"> Artism</h4><div class="location same-line"> San Jose, CA</div>
      <ul>
        <li>Built strong personal connections with students with Autism by introducing a new medium for expression and helping them communicate ideas through visual art</li>
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
          <td><a className="underline" href="Projects/#SwiftXCode" target="_blank">Swift • Xcode</a></td>
          <td><a className="underline" href="Projects/#AdobeIllustrator" target="_blank">Adobe Illustrator</a></td>
          <td>Java • C</td>
          <td><a className="underline" href="Projects/#JavascriptCSSHTML" target="_blank">JavaScript</a></td>
        </tr>
        <tr>
          <td><a className="underline" href="Projects/#React" target="_blank">React</a></td>
          <td><a className="underline" href="Projects/#Figma" target="_blank">Figma</a></td>
          <td><a className="underline" href="https://github.com/erica-w-fu" target="_blank">Unix • Git</a></td>
          <td><a className="underline" href="Projects/#JavascriptCSSHTML" target="_blank">CSS • HTML</a></td>
        </tr>
        <tr>
          <td><a className="underline" href="Projects/#C#Unity" target="_blank">C# • Unity</a></td>
          <td><a className="underline" href="Projects/#AdobePhotoshop" target="_blank">Adobe Photoshop</a></td>
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
      title="Nov 2020"
      style="dates"
    >
      <div className="link">
        <a className="underline" href="https://www.heinz.cmu.edu/current-students/keith-block-entrepreneurship-competition" target="_blank">
          <h3 class="bolded-title same-line">Keith Block Entrepreneur Competition  </h3><h4 class="faded-title same-line"> Second Place</h4>
        </a>
      </div>
    </Section>
    <Section
      title="Sep 2020"
      style="dates"
    >
      <h3 class="bolded-title same-line">HackCMU  </h3><h4 class="faded-title same-line"> EchoAR Category Award</h4>
    </Section>
  </>
  );
}

export default Resume;