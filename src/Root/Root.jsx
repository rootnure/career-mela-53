import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <h2>Root</h2>
            <Outlet />
        </div>
    );
};

export default Root;