import React, { useEffect, useState } from "react";
import api from "../../axiosConfig";

const Table1 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        showdata();
    }, []);

    const showdata = async () => {
        try {
            const response = await api.get('/EmpMasterContoller');
            setData(response.data.map((item) => ({ ...item, isEditing: false })));
        } catch (ex) {
            alert('Error fetching RationCard: ' + ex.message);
        }
    };

    return (
        <div className="table-container">
            <table>
                <caption>Employee List</caption>
                <thead>
                    <tr>
                        <th>Sr No Prerna</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length ? (
                        data.map((item) => (
                            <tr key={item.EmpID}>
                                <td>{item.EmpID}</td>
                                <td>{item.EmpName}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No data found</td>
                        </tr>
                    )}
                </tbody>

            </table>
        </div>
    );
};

export default Table1;
