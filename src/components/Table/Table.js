import React from 'react';
import './Table.css';

function Table() {
    return (
        <div className="Table">
            <table className="table">
                <Table-Header />
                <Table-Data />
            </table>
        </div>
    );
}

export default Table;
