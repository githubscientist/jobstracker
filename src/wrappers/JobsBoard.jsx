import { Outlet } from "react-router";

const JobsBoard = () => {
    return (
        <div>
            <h1
                className="text-center text-2xl font-bold mb-4 mt-4"
            >Jobs Tracker</h1>
            <p
                className="text-muted text-center text-sm"
            >You can track your jobs here.</p>

            <Outlet />
        </div>
    )
}

export default JobsBoard;