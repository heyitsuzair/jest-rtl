import React from "react";

const Skills = ({ skills }: { skills: string[] }) => {
  return (
    <div>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </div>
  );
};

export default Skills;
