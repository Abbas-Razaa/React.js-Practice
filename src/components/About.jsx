import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div className="flex gap-10 text-lg underline">
        {/* Link will load page without refreshing the page, only about page component will be changed, there will be no affect on other pages */}
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default About;
