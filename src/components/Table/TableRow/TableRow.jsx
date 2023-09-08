import React from 'react'
import './TableRow.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {MdModeEdit} from 'react-icons/md'
import {RiDeleteBinFill} from 'react-icons/ri'
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const TableRow = ({ srNo, fullName, email, contact, gender, userId, setUserData }) => {
  const handleDelete = () => {
    axios
    .delete(`${BASE_URL}/users/deleteUser/${userId}`)
    // .then(() => location.reload())
    .then(() => {
      axios.get("http://localhost:5000/users/getAllUsers").then(res => {
        setUserData(res.data);
      })
    })
    .catch((err) => alert(err));
  };

  // if (!searchQuery) {
return (
  <tr className='table-row' >
    <td>{srNo}</td>
    <td>{fullName}</td>
    <td>{email}</td>
    <td>{contact}</td>
    <td>{gender ? "Male" : "Female"}</td>
    <td>
      {/* <Link to={`/editUser/${userId}`} className='edit-btn'>Edit</Link> */}
      <Link to={`/editUser/${userId}`} className='edit-btn'><MdModeEdit /></Link>
      
    </td>
    <td>
      {/* <button className='delete-btn' onClick={handleDelete}><RiDeleteBinFill /></button> */}
      <RiDeleteBinFill className='delete-btn' onClick={handleDelete} />
    </td>
  </tr>
)
}
// }

export default TableRow