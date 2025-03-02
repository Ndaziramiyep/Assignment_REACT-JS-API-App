import React, {useState, useEffect} from 'react'
import axios from axios;
const UserProfile = ({userId}) =>{
    const [user, setUser] = useState(null);
    useEffect(()=>{
        const fetchUser = async() =>{
            try{
                const response = await axios.get(`https://api.example.com/users/${uderId}`);
                setUser(response.data);
            } catch(error){
                console.log('Error fetching user data:',error);

            }
        };
        fetchUser();
    },[userId]);
    return(
        <div>
            {user?(
                <div>
                    <h2>{user.name}</h2>
                    <p>Email:{user.email}</p>
                </div>
            ):(
                <p>Loading user data...</p>
            )};
        </div>
    )
};

export default UserProfile;