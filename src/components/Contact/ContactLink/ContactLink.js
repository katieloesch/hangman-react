import React from "react";
import "./ContactLink.scss";

const ContactLink = ({ name, icon, url }) => {
  return (
    <div className={`contact-link ${name}-link`}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </div>
  );
};

export default ContactLink;
