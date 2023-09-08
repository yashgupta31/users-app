import axios from "axios";
import React, { useEffect, useState } from "react";
import TableRow from "./TableRow/TableRow"
import './Table.css'
const BASE_URL = import.meta.env.VITE_API_BASE_URL;


const Table = ({ searchQuery, filterGender }) => {

    const [userData, setUserData] = useState([]);
    // console.log(userData)

    useEffect(() => {
        axios
            .get(`${BASE_URL}/users/getAllUsers`)
            .then(response => {
                setUserData(response.data)
            })

        // .then((data) => setUserData(data));
    }, []);

    return (
        <table border={1} id="users-table">
            <thead>
                <tr id="table-headers">
                    <th>Sr.no</th>
                    <th>Full Name</th>
                    <th>Email Address</th>
                    <th>Contact</th>
                    <th>Gender</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>

                {userData.length > 0 ?
                    userData
                    .filter(
                        (user) =>
                         user.email.includes(searchQuery) ||
                            user.fullName.includes(searchQuery) ||
                            user.contact.includes(searchQuery) 
                            // user.gender.includes(searchQuery)
                        )
                        .filter(
                            (user) => 
                            filterGender != "all" ? String(user.gender) === String(filterGender): true
                            )
                    
                        .map((user, index) => {
                            return (
                                < TableRow
                                    key={user._id}
                                    userId={user._id}
                                    srNo={index + 1}
                                    fullName={user.fullName}
                                    email={user.email}
                                    contact={user.contact}
                                    gender={user.gender}
                                    setUserData={setUserData}
                                // searchQuery={searchQuery}
                                />
                            );
                        }) : (
                        <h4>No Data Found!</h4>
                    )}

            </tbody>



        </table>
    )
}

export default Table

//     < TableRow
// srNo = { 1}
// fullName = "Yash G"
// gender = "Male"
// email = "yashgupta@gmail.com"
// contact = { 9527897680}
//     />