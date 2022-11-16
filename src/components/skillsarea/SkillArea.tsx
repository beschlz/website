import { useState } from "react";
import SkillCard from "../skillcard/SkillCard";

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
        name: `Projekt- &
    \n Anforderungs-
    \n mgmt`,
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
            {
                mockedSkills.map((skill) =>
                    <SkillCard
                        key={`key_skill_card_${skill.name}`}
                        acitve={skill.name === selectedSkill}
                        skillName={skill.name}
                        onClick={() =>
                            handleSelectedSkillChagen(skill.name)
                        }
                    />)
            }
        </>
    );
};

export default SkillArea;