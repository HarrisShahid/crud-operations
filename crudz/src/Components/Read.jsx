import React, { useState, useEffect } from 'react'
import '../Read.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { Link } from 'react-router-dom'

function Read() {

    const [data, setData] = useState([])
    
    function getData() {
        axios.get('https://677a3533671ca0306833534c.mockapi.io/cruds-operate').then((res) => {
            // console.log(res.data);
            setData(res.data);
        })
    }
    // getData();

    function handleDelete(id){
        axios.delete(`https://677a3533671ca0306833534c.mockapi.io/cruds-operate/${id}`).then(() => {
            getData();
            toast.success("Record is Deleted");
        })
    }
    useEffect(() => {
        getData();
    }, []);

    const setToStorage = (id, name, email, city, contact)=>{
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('city', city);
        localStorage.setItem('contact', contact);
    }

    return (
        <>
            <div className="main">
                <h2 className='contains'>All Data
                <Link to='/'><button className='btn btn-primary'> Back to Create </button></Link></h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">City</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    {
                        data.map((eachData) => {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{eachData.id}</th>
                                            <td>{eachData.name}</td>
                                            <td>{eachData.email}</td>
                                            <td>{eachData.city}</td>
                                            <td>{eachData.contact}</td>
                                            <Link to='/edit'><td><button className='btn btn-success' onClick={()=>setToStorage(
                                                eachData.id,
                                                eachData.name,
                                                eachData.email,
                                                eachData.city,
                                                eachData.contact
                                            )}>Edit</button></td></Link>
                                            <td><button className='btn btn-danger' onClick={()=>handleDelete(eachData.id)}>Delete</button></td>
                                        </tr>
                                    </tbody>
                                </>
                            )
                        })
                    }
                </table>
                <ToastContainer 
                position="top-center"
                autoClose={800}
                theme="dark"
                // transition= {Zoom}
                limit={1} />
            </div>
        </>
    )
}

export default Read
