
interface Props {
  skillName: string;
}


const SkillCard: React.FC<Props> = ({skillName}) => {

return (
<div className="h-fit bg-secondaryColor rounded-xl max-w-[184px] min-h-[40px] m-2 ">
  <p className="inline-block w-fit h-fit max-w-[120px] mr-16 pl-6 font-mono mt-1">
    {skillName}
  </p>
</div>);
};


export default SkillCard;