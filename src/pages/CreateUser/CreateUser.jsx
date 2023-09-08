import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './CreateUser.css'
import axios from 'axios';

const CreateUser = () => {

  const Navigator = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {

    try{

    e.preventDefault();

    //Final data
    const user = {
      fullName: fullName,
      gender: gender,
      contact: contact,
      email: email
    }

    //send the data to backend
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/users/saveUser`, user)
      .then(() => {
        alert("User created successfully!");
        //Navigate To homepage /Dashboard
        Navigator("/");
      });
  }catch(err) {
    alert(err)
  }
  };

  return (
     
    <>
    <div className='create-user-background'>
      
      <form className="user-form" onSubmit={handleSubmit} >
        <h2>Create New User</h2>
        <input
          type="text"
          placeholder="Enter Your Full Name"
          required={true}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="number"
          placeholder="Enter Contact Number"
          required={true}
          onChange={(e) => setContact(e.target.value)}
        />

        <div>
          <input
            type="radio"
            name="gender"
            required={true}
            onClick={() => setGender(true)} /> Male
          <input
            type="radio"
            name="gender"
            required={true}
            onClick={() => setGender(false)} /> Female
        </div>

        <input type="submit" value="Add New User!" />

        <Link to="/" >Go Back!</Link>

      </form>

    </div>
    </>
  
  )
}

export default CreateUser