import React from "react";
import SkillCard from "../skillcard/SkillCard";

type SkillAreaProps = {
    skills: Skill[];
}

type Skill = {
    name: string;
    values: IndividualSkill[];
}

type IndividualSkill = {
    name: string;
    level: number;
}



const SkillArea: React.FC<SkillAreaProps> = ({ skills }) => {
    const [selectedSkill, setSelectedSkill] = React.useState(skills[0].name);

    const handleSelectedSkillChagen = (newSkill: string) => {
        setSelectedSkill(newSkill);
    };


    return (
        <>
            {
                skills.map((skill) =>
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