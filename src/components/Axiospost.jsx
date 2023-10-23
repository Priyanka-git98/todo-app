import React, {useState} from 'react'
import axios from 'axios';


function Axiospost() {
    const data = {firstName:"", lastName:""}
    const [inputData, setInputData] = useState(data);

    const handleData = (e) =>{
        setInputData({...inputData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", inputData)
        .then((response) =>{
            console.log(response)
        })
    }
  return (
    <div>
        <label>first name:</label>
        <input type="text" name="firstName" value={inputData.firstName} onChange={handleData}></input>
        <label>last name:</label>
        <input type="text" name="lastName" value={inputData.lastName} onChange={handleData}></input>

        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Axiospost