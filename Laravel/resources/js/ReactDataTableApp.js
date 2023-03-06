import React from "react";
import ReactDOM from 'react-dom';
import DataTable from "./components/DataTable";
const ReactDataTableApp = () => {

    return(
        <DataTable />
    );
}

export default ReactDataTableApp;


if (document.getElementById('datatable')) {
    ReactDOM.render(<ReactDataTableApp />, document.getElementById('datatable'));
}
