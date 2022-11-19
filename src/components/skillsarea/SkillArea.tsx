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

const mockedSkills = [
    {
        name: "Programmier-\nsprachen",
        values: [{ name: "Java", level: 0.2 },
        { name: "Go", level: 0.9 },
        { name: "Python", level: 0.5 },
        { name: "JavaScript/ TypeScript", level: 0.4 }
        ]
    },
    {
        name: "Backend",
        values: [{ name: "Java", level: 0.8 }],
    },
    {
        name: "Web & Mobile",
        values: [{ name: "Java", level: 0.8 }],
    },
    {
        name: "DevOps",
        values: [
            { name: "Docker", level: 0.8 },
            { name: "Kubernetes", level: 0.7 },
            { name: "Helm", level: 0.5 },
            { name: "CI/CD", level: 0.3 },
            { name: "Skaffold", level: 0.9 },
            { name: "Google Cloud", level: 0.2 },
        ],
    },
    {
        name: "Projekt- & Anforderungsmgmt",
        values: [{ name: "Java", level: 0.8 }],
    },
];


const SkillArea: React.FC = () => {
    const [selectedSkill, setSelectedSkill] = useState(mockedSkills[0].name);

    const handleSelectedSkillChagen = (newSkill: string) => {
        setSelectedSkill(newSkill);
    };


    return (
        <>

            <div className={styles.scrollingWrapper}>
                {
                    mockedSkills.map((skill) =>
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
                    mockedSkills.find(s => s.name === selectedSkill)?.values.map(
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