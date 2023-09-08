import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

const EditUser = () => {

  const Navigator = useNavigate();

  const [user, setUser] = useState({})

  const { userId } = useParams();

  useEffect(() => {
    //Way 1- promise chain
    axios
      .get(`http://localhost:5000/users/getUser/${userId}`)
      .then((res) => {
        setUser(res.data[0]);

      });
  }, []);

  const handleForm = (e) => {
    e.preventDefault();

    //Final edited data
    const userData = {
      fullName: user.fullName,
      gender: user.gender,
      contact: user.contact,
      email: user.email
    };


    //send the data to backend
    axios
      .patch(`${import.meta.env.VITE_API_BASE_URL}/users/updateUser/${userId}`, userData)
      .then(() => {
      alert("User Updated successfully!");
      //Navigate To homepage /Dashboard
      Navigator("/");
      })
      .catch((err) => alert(err)); 
  };

return (
  <div>
    <form className="user-form" onSubmit={handleForm}>
      <h2>Update User Detail!</h2>
      <input 
      type="text" 
      placeholder="Enter Your Full Name" 
      defaultValue={user.fullName} 
      onChange={(e) => setUser({...user, fullName: e.target.value})}
      />
      <input 
      type="email" 
      placeholder="Enter Your Email" 
      defaultValue={user.email} 
      onChange={(e) => setUser({...user, email: e.target.value})}
      />
      <input 
      type="number" 
      placeholder="Enter Contact Number" 
      defaultValue={user.contact} 
      onChange={(e) => setUser({...user, contact: e.target.value})}
      />

      <div>
        <input 
        type="radio" 
        name="gender" 
        defaultChecked={user.gender} 
        onChange={(e) => setUser({ ...user, gender: e.target.checked})}
        /> Male

        <input type="radio" 
        name="gender" 
        defaultChecked={!user.gender} 
        onChange={(e) => setUser({ ...user, gender: !e.target.checked})}
        /> Female
      </div>

      <input type="submit" value="Update User Detail!" />

      <Link to="/">Go Back!</Link>

    </form>
  </div>
)
};

export default EditUser