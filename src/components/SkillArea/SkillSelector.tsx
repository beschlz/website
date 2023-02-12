interface Props {
    skillName: string;
    acitve: boolean;
    onClick: () => void;
};

const SkillSelector: React.FC<Props> = ({ skillName, acitve, onClick }) => {

    return (
        <button className={`border border-solid border-black shadow-lg w-64 min-w-64 rounded-xl h-24 mb-8 inline-block p-0 
            ${acitve ? "bg-white text-black" : "bg-translucentMain text-white"}`} onClick={onClick}>
            <p className="break-normal whitespace-normal h-full max-w-[100%] text-left pl-6 pt-3 font-mono ">{skillName}</p>
        </button>
    );
};

export default SkillSelector;