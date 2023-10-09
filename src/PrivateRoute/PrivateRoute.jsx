import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) return <div className='flex h-screen justify-center items-center text-center'><span className="loading loading-bars loading-lg"></span></div>

    if (!user) return <Navigate to="/login"></Navigate>

    return children;

};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default PrivateRoute;