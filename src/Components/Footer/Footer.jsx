import React from "react";

let Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="logo">
          <p>
            Movies <span>Land</span>
          </p>
        </div>

        <div className="content">
          <div className="about">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            voluptatem optio quod animi suscipit, pariatur iure, est corporis
            consequuntur officiis harum eaque consequatur ab id dolor, nam
            dolores asperiores in.
          </div>

          <ul>
            <li>Android App</li>
            <li>Terms of service</li>
            <li>Contact</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="info">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
            dignissimos tempora repudiandae praesentium odio quisquam.
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
