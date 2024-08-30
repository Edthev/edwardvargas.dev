import React from "react";
import "./ExperienceDetails.scss";
const ExperienceDetails = ({ Title, Description, TechStack, Start, End }) => {
   return (
      <div className="experienceDetails">
         <div className="experienceDetails__date">
            {Start} — {End}
         </div>
         <h1 className="experienceDetails__title">{Title}</h1>
         <div className="experienceDetails__techstack">{TechStack}</div>
         <div className="experienceDetails__description">{Description}</div>
      </div>
   );
};
export default ExperienceDetails;
