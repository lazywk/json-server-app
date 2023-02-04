import React, { useEffect, useState } from "react";
import axios from "axios";

export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/users").then(data => setUsers(data.data)).catch(err => console.log(err))
    }, [])


    return (
        <div>
            {
                users.length ? (
                    <table className="table table-striped my-3">
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Firstname
                                </th>
                                <th>
                                    Lastname
                                </th>
                                <th>
                                    Email
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => (
                                    <tr key={user.id} className="">
                                        <td>{user.id}</td>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                ) : ('')
            }
        </div>
    );
}