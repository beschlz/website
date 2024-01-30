import { useState } from "react";
import SkillSelector from "./SkillSelector";
import SkillCard from "./SkillCard";

const skills = [
  {
    name: "Programmiersprachen",
    values: [
      { name: "Java", level: 0.9 },
      { name: "Go", level: 0.7 },
      { name: "Python", level: 0.6 },
      { name: "JavaScript/ TypeScript", level: 0.8 },
      { name: "SQL", level: 0.8 },
    ],
  },
  {
    name: "Backend",
    values: [
      { name: "NoSQL", level: 0.4 },
      { name: "Spring", level: 0.8 },
      { name: "REST API", level: 0.75 },
      { name: "Hibernate", level: 0.84 },
      { name: "Postgres", level: 0.9 },
      { name: "Identity & Access Mgmt", level: 0.5 },
      { name: "Kafka", level: 0.3 },
      { name: "Redis", level: 0.7 },
    ],
  },
  {
    name: "Web & Mobile",
    values: [
      { name: "React", level: 0.8 },
      { name: "React Native", level: 0.65 },
      { name: "HTML/CSS", level: 0.7 },
      { name: "Tailwind", level: 0.7 },
      { name: "Vite", level: 0.6 },
      { name: "Astro", level: 0.6 },
    ],
  },
  {
    name: "DevOps",
    values: [
      { name: "Docker", level: 0.8 },
      { name: "Kubernetes", level: 0.7 },
      { name: "Helm", level: 0.7 },
      { name: "CI/CD", level: 0.8 },
      { name: "AWS", level: 0.5 },
      { name: "Cloudflare", level: 0.5 },
    ],
  },
  {
    name: "Projekt-\n & Anforderungsmgmt",
    values: [
      { name: "Kanban", level: 0.8 },
      { name: "UML", level: 0.6 },
      { name: "Scrum", level: 0.7 },
      { name: "Interviewing", level: 0.65 },
      { name: "Prozess-modellierung (EPK, BPMN)", level: 0.5 },
    ],
  },
];

const SkillArea: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState(skills[0].name);

  const handleSelectedSkillChange = (newSkill: string) => {
    setSelectedSkill(newSkill);
  };

  return (
    <>
      <div className="wrap mb-4 mr-4 md:mr-10 flex items-center justify-between overflow-y-hidden overflow-x-scroll">
        {skills.map((skill) => (
          <SkillSelector
            key={`key_skill_card_${skill.name}`}
            active={skill.name === selectedSkill}
            skillName={skill.name}
            onClick={() => handleSelectedSkillChange(skill.name)}
          />
        ))}
      </div>
      <div className="mr-4 md:mr-10 flex min-h-[400px] w-auto flex-col content-end items-end rounded-xl bg-translucentMain p-8">
        <div className="flex w-full justify-between text-sm md:text-base">
          <p>Beginner</p>
          <p>Proficient</p>
          <p>Advanced</p>
        </div>
        {skills
          .find((s) => s.name === selectedSkill)
          ?.values.map(({ name, level }) => (
            <div
              key={`key_skillrow_${name}_${level}`}
              className="flex justify-start"
              style={{ minWidth: `${100 - level * 100}%` }}
            >
              <SkillCard skillName={name} />
            </div>
          ))}
      </div>
    </>
  );
};

export default SkillArea;
