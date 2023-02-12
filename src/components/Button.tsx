type ButtonProps = {
    text: string
};

const Button: React.FC<ButtonProps> = ({ text }) => {
    return <button className="font-mono text-sm font-bold bg-secondaryColor pl-3 pr-3 p-2 rounded-md">{text}</button>
};

export default Button;