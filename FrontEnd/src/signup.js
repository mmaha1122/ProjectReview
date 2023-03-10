import axios from 'axios';
import "./signup.css"
import {useState } from "react";

function Srii() {
    const [id, setId] = useState('');
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [department, setDepartment] = useState("");
    const [block, setBlock] = useState("");
    const [status, setStatus] = useState("");
    const[delid,SetDelId]=useState('');
    const handleClick =()=>{
      fetch("http://localhost:8080/h/del?id="+delid, {
        method: "DELETE",
        headers: {"Accept":"application/json", "Content-Type":"application/json"}
    }).then(res => console.log("Id Deleted"));
    }
    async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/h/detail",
        {
        
       name:name,
       age:age,
       department:department,
       block:block,
       status:status

        });
          alert("Sucessfully.");
          setId("");
          setName("");
          setAge("");
          setDepartment("");
          setBlock("");
          setStatus("");
        }
    catch(err)
        {
          alert("Failed");
        }
   }
    return ( <>
    <div className='main'>
    <form method="post" action="">

<h1><center>HOSTEL DETAILS</center></h1>

<label for="name">Name</label>
<input type="text" id="name" name="name" placeholder="Type your name.." autocomplete="off" required 
value={name}
onChange={(event) =>
  {
    setName(event.target.value);      
  }}
/>
<label for="name">Age</label>
<input type="text" id="name" name="name" placeholder="Type your name.." autocomplete="off" required 
value={age}
onChange={(event) =>
  {
    setAge(event.target.value);      
  }}
/>

<label for="deprtment">Department</label>
<input type="department" id="department" name="department" placeholder="Enter your department.." autocomplete="off" required 
value={department}
onChange={(event) =>
  {
    setDepartment(event.target.value);      
  }}
/>


<label for="block">Block</label>
<input type="block" id="block" name="block" placeholder="Enter your Block.." autocomplete="off" required 
value={block}
onChange={(event) =>
  {
    setBlock(event.target.value);      
  }}
/>
<label for="block">Status-Present or Absent</label>
<input type="block" id="block" name="block" placeholder="Enter your Status.." autocomplete="off" required 
value={status}
onChange={(event) =>
  {
    setStatus(event.target.value);      
  }}
/>
<button class="submit" onClick={save}>Submit</button><br></br>
<input type ="text"  placeholder="Delete the id.." value={delid} onChange={(e)=>{SetDelId(e.target.value)}}></input>
<button class="submit" onClick={handleClick}>Delete</button>

</form>
</div>

    </> );
}

export default Srii;