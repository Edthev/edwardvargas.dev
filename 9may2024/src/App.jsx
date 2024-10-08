import ConnectionLinks from "./components/connections/ConnectionLinks";
import ExperienceDetails from "./components/experience/ExperienceDetails";
import ProjectDetails from "./components/projects/ProjectDetails.jsx";
import githubSVG1 from "./assets/github-mark-white.svg";
import githubSVG2 from "./assets/github-mark.svg";
import githubSVG3 from "./assets/githubIcon.svg";
import linkedInSVG from "./assets/linkedin-svgrepo-com.svg";
import linkedInSVG2 from "./assets/linkedinIcon.svg";
import "./App.scss";

function App() {
   const boilerPlate = ["HTML5", "CSS3", "SASS", "JAVASCRIPT"];
   return (
      <div className="app">
         <header>
            <h1>Edward Vargas</h1>
            <h2>Software Engineer</h2>
            <h3>Building innovative and dynamic solutions</h3>
            <div className="desktop">
               <h3>About</h3>
               <h3>Projects</h3>
               <h3>Experience</h3>
            </div>
         </header>
         <main>
            <h3>
               I see myself as a puzzle solver and I see software as a puzzle that is the most
               satisfying to bring to it's conclusion
               <br />
               Passionate software enthusiast with a relentless drive for learning and
               innovation.
               <br />
               Eager to embark on a journey in the dynamic world of software engineering,
               <br />
               leveraging self-motivation and adaptability as key assets in every project.
               <br />
               thrive on challenges and possess a natural curiosity that fuels my continuous
               growth in the dynamic field of technology. My journey into software engineering
               began with a deep fascination for problem-solving and a commitment to mastering
               the craft through self-directed study and practical application.
            </h3>
            {/* <div class="about"> I've always loved a challenge and with software that comes with the space. </div> */}
            <div class="about">
               Passionate software enthusiast with a relentless drive for learning and
               innovation.
               <br />
               Eager to embark on a journey in the dynamic world of software engineering,
               <br />
               leveraging self-motivation and adaptability as key assets in every project.
               <br />
               In my off time I love to create with my hands. Whether thats fashion or
               electronics.
            </div>
            <div class="projects">
               <h1 className="notDesktop">Projects</h1>
               <ProjectDetails
                  Title="SoundSwap"
                  Description="desc"
                  Date="date"
                  TechStack="python git"
                  URL="#"
               />
            </div>
            <div class="experience">
               <h1 className="notDesktop">Experience</h1>
               <ExperienceDetails
                  Title="Administrative Associate"
                  Description="desc"
                  TechStack={`python`}
                  Start="september 2020"
                  End="present"
               />
            </div>
            <div class="connect">
               <ConnectionLinks Icon={githubSVG1} Link="https://github.com/Edthev" />
               <ConnectionLinks
                  style={{ backgroundColor: "blue" }}
                  Icon={linkedInSVG2}
                  Link="https://www.linkedin.com/in/edward-derek-vargas/"
               />
            </div>
            <div class="description">
               Coded in Visual Studio Code. Built with React.js and SASS. Deployed on
               CloudFlare.
            </div>
         </main>
      </div>
   );
}

export default App;
