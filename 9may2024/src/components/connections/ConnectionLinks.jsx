import "./ConnectionLinks.scss";
import React from "react";
const ConnectionLinks = ({ Link, Icon }) => {
   return (
      <div className="connectionLink">
         <a href={Link}>
            <img className="connectionLink__image" src={Icon} />
         </a>
      </div>
   );
};
export default ConnectionLinks;
