import { useState } from "react";
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
        values: [{ name: "Java", level: 0.8 }],
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


        </>
    );
};

export default SkillArea;