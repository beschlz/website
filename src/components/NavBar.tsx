const NavBar: React.FC = () => {
    return (
        <nav className="mt-10 ml-8 sm:ml-14">
            <ul className="list-none">
                <li className="text-xl inline mr-8 font-mono">
                    <a href="#aboutme">Über mich</a>
                </li>
                <li className="text-xl inline mr-8 font-mono">
                    <a href="#stations">Stationen</a>
                </li>
                <li className="text-xl inline mr-8 font-mono">
                    <a href="#skills">Skills</a>
                </li>
            </ul>
        </nav >
    );
};

export default NavBar;