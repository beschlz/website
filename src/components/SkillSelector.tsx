interface Props {
  skillName: string;
  active: boolean;
  onClick: () => void;
}

const SkillSelector: React.FC<Props> = ({ skillName, active, onClick }) => {
  return (
    <button
      className={`mb-8 mr-8 block h-24 w-[240px] min-w-[240px] rounded-xl border border-solid border-black p-0 shadow-lg last:mr-0 
            ${active ? "bg-white text-black" : "bg-translucentMain text-white"}`}
      onClick={onClick}
    >
      <p className="h-full max-w-[100%] whitespace-normal break-normal pl-6 pt-3 text-left font-mono ">
        {skillName}
      </p>
    </button>
  );
};

export default SkillSelector;
