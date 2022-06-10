import React from "react";

import Tasks from "./task";

const tasks = ({tasks}) => {
    return (
        <>
            {tasks.map(task => <task />)}
        </>
    );
};

export default tasks;