export default function ProjectDetails({ Title, Description, Date, TechStack }) {
   return (
      <div className="projectDetails">
         <div className="projectDetails__title">{Title}</div>
         <div className="projectDetails__description">{Description}</div>
         <div className="projectDetails__techstack">{TechStack}</div>
         <div className="projectDetails__time">{Date}</div>
      </div>
   );
}
