import React from "react";
const ExperienceDetails = ({ Title, Description, TechStack, Date }) => {
   return (
      <div className="experienceDetails">
         <div className="experienceDetails__title">{Title}</div>
         <div className="experienceDetails__description">{Description}</div>
         <div className="experienceDetails__techstack">{TechStack}</div>
         <div className="experienceDetails__time">{Date}</div>
      </div>
   );
};
export default ExperienceDetails;
