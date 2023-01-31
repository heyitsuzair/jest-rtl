import React, { useState } from "react";

const Skills = ({ skills }: { skills: string[] }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
      )}
    </div>
  );
};

export default Skills;
