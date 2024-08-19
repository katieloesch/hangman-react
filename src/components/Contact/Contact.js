import React from "react";

import contactIcons from "./contactIcons";
import "./Contact.scss";
import ContactLink from "./ContactLink/ContactLink";

const Contact = ({ code }) => {
  const links = [
    {
      name: "code",
      url: code,
      icon: contactIcons.code,
    },
    {
      name: "portfolio",
      url: "http://katieloesch.co.uk",
      icon: contactIcons.portfolio,
    },
    {
      name: "github",
      url: "http://github.com/katieloesch",
      icon: contactIcons.gitHub,
    },
    {
      name: "mail",
      url: "mailto:katie.loesch@pm.me",
      icon: contactIcons.mail,
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/katie-loesch/",
      icon: contactIcons.linkedin,
    },
  ];

  return (
    <div className="contact">
      {links.map((link) => (
        <ContactLink
          name={link.name}
          url={link.url}
          icon={link.icon}
          key={`contact-icon-${link.name}`}
        />
      ))}
    </div>
  );
};

export default Contact;
