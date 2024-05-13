import React from "react";
const ConnectionLinks = ({ Link, Icon }) => {
   return (
      <div className="connectionLink">
         <a href={Link}>
            <img src={Icon} />
         </a>
      </div>
   );
};
export default ConnectionLinks;
