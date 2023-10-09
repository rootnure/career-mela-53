import { Link } from 'react-router-dom';


const Logo = () => {
    return (
        <div>
            <Link to="/"><button className="btn btn-ghost normal-case text-2xl md:text-4xl font-handlee">Career Mela</button></Link>
        </div>
    );
};

export default Logo;