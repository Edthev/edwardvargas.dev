import "./ProjectDetails.scss";
export default function ProjectDetails({ Title, Description, Date, TechStack, URL }) {
   const boilerPlate = ["HTML5", "CSS3", "SASS", "JAVASCRIPT"];
   const other = TechStack.split(" ");
   boilerPlate.push(...other);
   console.log("boilerPlate", boilerPlate);
   return (
      <div className="projectDetails">
         <a href="#">
            <div className="projectDetails__title">
               <div className="projectDetails__time">{Date}</div>
               <h1>{Title}</h1>
            </div>
            <div className="projectDetails__techstack">
               {boilerPlate.map((tool) => {
                  return <div className="tools">{tool}</div>;
               })}
            </div>
            <div className="projectDetails__description">{Description}</div>
         </a>
      </div>
   );
}
