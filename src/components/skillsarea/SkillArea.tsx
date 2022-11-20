import { useState } from "react";
import SkillCard from "../skillcard/SkillCard";
import SkillSelector from "../skillselector/SkillSelector";
import styles from './SkillArea.module.css';

type Skill = {
    name: string;
    values: IndividualSkill[];
}

type IndividualSkill = {
    name: string;
    level: number;
}

const skills = [
    {
        name: "Programmier-\nsprachen",
        values: [{ name: "Java", level: 0.9 },
        { name: "Go", level: 0.7 },
        { name: "Python", level: 0.6 },
        { name: "JavaScript/ TypeScript", level: 0.8 },
        { name: "SQL", level: 0.8 },
        ]
    },
    {
        name: "Backend",
        values: [
            { name: "NoSQL", level: 0.4 },
            { name: "Spring", level: 0.8 },
            { name: "REST API", level: 0.75 },
            { name: "Hibernate", level: 0.84 },
            { name: "Postgres", level: 0.9 },
            { name: "Identity & Access Mgmt", level: 0.5 }
        ],
    },
    {
        name: "Web & Mobile",
        values: [
            { name: "React", level: 0.8 },
            { name: "React Native", level: 0.65 },
            { name: "HTML/CSS", level: 0.7 }],
    },
    {
        name: "DevOps",
        values: [
            { name: "Docker", level: 0.8 },
            { name: "Kubernetes", level: 0.7 },
            { name: "Helm", level: 0.7 },
            { name: "CI/CD", level: 0.8 },
            { name: "Google Cloud", level: 0.4 },
        ],
    },
    {
        name: "Projekt- & Anforderungsmgmt",
        values: [
            { name: "Kanban", level: 0.8 },
            { name: "UML", level: 0.6 },
            { name: "Scrum", level: 0.7 },
            { name: "Interviewing", level: 0.65 },
            { name: "Prozess-modellierung (EPK, BPMN)", level: 0.5 }
        ],
    },
];


const SkillArea: React.FC = () => {
    const [selectedSkill, setSelectedSkill] = useState(skills[0].name);

    const handleSelectedSkillChagen = (newSkill: string) => {
        setSelectedSkill(newSkill);
    };


    return (
        <>

            <div className={styles.scrollingWrapper}>
                {
                    skills.map((skill) =>
                        <SkillSelector
                            key={`key_skill_card_${skill.name}`}
                            acitve={skill.name === selectedSkill}
                            skillName={skill.name}
                            onClick={() =>
                                handleSelectedSkillChagen(skill.name)
                            }
                        />)
                }
            </div>
            <div className={styles.skillLevelsContainer}>
                <div className={styles.headerRow}>
                    <p>Beginner</p>
                    <p>Proficient</p>
                    <p>Advanced</p>
                </div>
                {
                    skills.find(s => s.name === selectedSkill)?.values.map(
                        (skill) =>

                            <div key={`key_skillrow_${skill.name}_${skill.level}`} className={styles.skillRow} style={{ minWidth: `${100 - (skill.level * 100)}%` }}>
                                <SkillCard skillName={skill.name} />
                            </div>
                    )
                }

            </div>


        </>
    );
};

export default SkillArea;