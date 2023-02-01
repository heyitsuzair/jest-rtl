import React, { useEffect, useState } from "react";

const Skills = ({ skills }: { skills: string[] }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 500);
  }, []);

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
