import PropTypes from 'prop-types';


const LogInOverlay = ({ handlePageLoading }) => {
    return (
        <>
            <div className="flex flex-col items-center text-center gap-y-4">
                <h2 className="text-4xl font-bold">Welcome, Friend!</h2>
                <p>Enter your login credential and start journey with us</p>
                <h3 className="text-3xl font-extrabold">or,</h3>
                <button onClick={handlePageLoading} className="btn bg-transparent rounded-full w-40 border-2 border-gray-600 hover:bg-cyan-50 hover:border-gray-400">Register</button>
            </div>
        </>
    );
};

LogInOverlay.propTypes = {
    handlePageLoading: PropTypes.func.isRequired
}

export default LogInOverlay;