import PropTypes from 'prop-types';


const RegistrationOverlay = ({ handlePageLoading }) => {
    return (
        <>
            <div className="flex flex-col items-center text-center gap-y-4">
                <h2 className="text-4xl font-bold">Hello, Friend!</h2>
                <p>Register a new account to stay connect with us</p>
                <h3 className="text-3xl font-extrabold">or,</h3>
                <button onClick={handlePageLoading} className="btn bg-transparent rounded-full w-40 border-2 border-gray-600 hover:border-gray-400 hover:bg-cyan-50">Log In</button>
            </div>
        </>
    );
};

RegistrationOverlay.propTypes = {
    handlePageLoading: PropTypes.func.isRequired
}

export default RegistrationOverlay;