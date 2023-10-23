import axios from 'axios';
import React, {useEffect, useState} from 'react'

function Axios() {
    const [userData, setData] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response)
            setData(response.data)
        }) 
    },[])
  return (
    <div>Axios
        {userData.map((data) =>{
            return(
                <div>{data.name}</div>
            )
        })}
    </div>
  )
}

export default Axios;
