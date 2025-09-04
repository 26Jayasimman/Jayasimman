import { useEffect, useState } from 'react';
import '../styles/UserProfile.css';

function UserProfile(){
    const [users,setUsers]=useState([])
    const [index,setIndex]=useState(0)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(res=>setUsers(res))

    },[])

    const handleprev=()=>{
        setIndex((prev)=>prev>0?prev-1:users.length-1)
    }
    const handlenext=()=>{
       setIndex((prev) => (prev < users.length - 1 ? prev + 1 : 0));
    }

     const user = users[index];
   return(
    <>
     {user && <div className="userprofile-main">
        <div className="user">
            <h1>Total-Users : {user.id}/{users.length}</h1>
        </div>
       <div className="table">
            <table>
                <tbody>
                    <tr><td><strong>ID</strong></td><td>{user.id}</td></tr>
                    <tr><td><strong>Name</strong></td><td>{user.name}</td></tr>
                    <tr><td><strong>Username</strong></td><td>{user.username}</td></tr>
                    <tr><td><strong>Email</strong></td><td>{user.email}</td></tr>
                    <tr><td><strong>Phone</strong></td><td>{user.phone} </td></tr>
                    <tr><td><strong>Address</strong></td><td>{user.address.street},{user.address.city}</td></tr>
                    <tr><td><strong>Website</strong></td><td>{user.website}</td></tr>
                    <tr><td><strong>Company</strong></td><td>{user.company.name}</td></tr>
                </tbody>
            </table>
        </div>
        <div className='buttons'>
            <button className='prev' onClick={handleprev}>Prev</button>
            <button className='next' onClick={handlenext}>Next</button>
        </div>
    </div>}
    </>
   )
}
export default UserProfile