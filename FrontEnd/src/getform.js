import React,{ useEffect,useState} from "react";
import './getform.css';
import axios from "axios";
function DataBaseView(){
    const [content, addContent]=useState([]);
    useEffect(()=>{

    axios.get('http://localhost:8080/h/get').then(function (response) {
    
    addContent(response.data);
    });
    })
    return(
        <div className="min">
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Department</th>
                    <th>Block</th>
                    <th>Status</th>
                </tr>
                {content.map((value)=>(
                    <tr>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.age}</td>
                        <td>{value.department}</td>
                        <td>{value.block}</td>
                        <td>{value.status}</td>
                    </tr>
                ))}
                    
            </table>
          
        </div>
        </div>
    )
}
export default DataBaseView;