interface Props {
  skillName: string;
  active: boolean;
  onClick: () => void;
}

const SkillSelector: React.FC<Props> = ({ skillName, active, onClick }) => {
  return (
    <button
      className={`border mr-8 last:mr-0 border-solid border-black shadow-lg w-[240px] min-w-[240px] rounded-xl h-24 mb-8 block p-0 
            ${active ? "bg-white text-black" : "bg-translucentMain text-white"}`}
      onClick={onClick}
    >
      <p className="break-normal whitespace-normal h-full max-w-[100%] text-left pl-6 pt-3 font-mono ">
        {skillName}
      </p>
    </button>
  );
};

export default SkillSelector;
