import axios from "axios";
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'

function Create() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [contact, setcontact] = useState("")
    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://677a3533671ca0306833534c.mockapi.io/cruds-operate",
            {
                email: email,
                name: name,
                city: city,
                contact: contact,
            }).then(() => {
                const notify = () => toast.success("Data is saved");
                notify();
                history("/read");
            });
    }

    return (
        <>
            <form>
            <h2 className='contains'>Create
            <Link to='/read'><button className='btn btn-primary'> Show All Data </button></Link></h2>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">City</label>
                    <input type="text" onChange={(e) => setCity(e.target.value)} className="form-control" />
                </div>
                {/* <div className="mb-3">
                <label className="form-label">Subject</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1" onChange={(e) => setSubject(e.target.value)}>Urdu</option>
                    <option value="2" onChange={(e) => setSubject(e.target.value)}>Maths</option>
                    <option value="3" onChange={(e) => setSubject(e.target.value)}>Computer</option>
                </select>
                </div> */}
                <div className="mb-3">
                    <label className="form-label">Contact</label>
                    <input type="text" onChange={(e) => setcontact(e.target.value)} className="form-control" />
                </div>
                {/* {name}
                {email} */}
                <div className='contains'>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                <Link to='/ctgy'><button className='btn btn-primary'>Go to Ctgy </button></Link></div>
                <ToastContainer />
            </form>
        </>
    )
}

export default Create