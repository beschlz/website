interface Props {
  skillName: string;
}

const SkillCard: React.FC<Props> = ({ skillName }) => {
  return (
    <div className="m-2 h-fit min-h-[40px] max-w-[184px] rounded-xl bg-secondaryColor ">
      <p className="mr-16 mt-1 inline-block h-fit w-fit max-w-[120px] pl-6 font-mono">
        {skillName}
      </p>
    </div>
  );
};

export default SkillCard;
