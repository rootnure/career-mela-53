import PropTypes from 'prop-types';


const LogInOverlay = ({ handlePageLoading }) => {
    return (
        <div className="h-full w-96 bg-cyan-100 flex items-center p-4 rounded-r-lg">
            <div className="flex flex-col items-center text-center gap-y-4">
                <h2 className="text-4xl font-bold">Hello, Friend!</h2>
                <p>Enter your login credential and start journey with us</p>
                <h3 className="text-3xl font-extrabold">or,</h3>
                <button onClick={handlePageLoading} className="btn bg-transparent rounded-full w-40 border-2 border-gray-600 hover:bg-cyan-50 hover:border-cyan-50">Register</button>
            </div>
        </div>
    );
};

LogInOverlay.propTypes = {
    handlePageLoading: PropTypes.func.isRequired
}

export default LogInOverlay;