import { Link } from 'react-router-dom'
import './Dashboard.css'
import Table from '../../components/Table/Table'
import { useState } from 'react'
import CreateUser from '../CreateUser/CreateUser'


const Dashboard = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [filterGender, setFilterGender] = useState("all");
  const [isClickCreate, setIsClickCreate] = useState(false);

  const handleCreateUser = () =>{
    // e.preventDefault();
    setIsClickCreate(true)
    // getButtonClick(true)
  }


  return (
    <div>
    {isClickCreate &&  <CreateUser />  }
    <div className='dashboard-container'>
      <h1 id='main-Heading'>User Management App!</h1>

      <input
        type="search"
        placeholder='Search Here..!'
        id='searchBar'
        onChange={(e) => setSearchQuery(e.target.value)} />

      <select id="filterByGender" onChange={(e) => setFilterGender(e.target.value)}>
      <option value="all">All</option>
        <option value="true">Male</option>
        <option value="false">Female</option>
      </select>

      <Link id='add-btn' to={"/createUser"} onClick={handleCreateUser}>Add User!</Link>

      <Table 
      searchQuery={searchQuery}
      filterGender={filterGender} />
    </div> 
    </div>
  )
}

export default Dashboard