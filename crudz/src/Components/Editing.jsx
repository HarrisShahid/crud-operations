import React, { useEffect, useState } from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

function Editing() {
    const [id, setID] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState();
    const [contact, setContact] = useState("");
    const history = useNavigate();

    useEffect(() => {
        setID(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
        setCity(localStorage.getItem('city'));
        setContact(localStorage.getItem('contact'));

    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://677a3533671ca0306833534c.mockapi.io/cruds-operate/${id}`,
            {
                email: email,
                name: name,
                city: city,
                contact: contact,
            }).then(() => {
                toast.success("Record is Updated");
                history("/read");
            });
    }
    return (
        <>
            <form>
                <h2 className='contains'>Update
                    <Link to='/read'><button className='btn btn-dark'> Back </button></Link></h2>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                {/* <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <select class="form-select" aria-label="Default select example" value={subject} onChange={(e) => setSubject(e.target.value)}>
                        <option selected>Open this select menu</option>
                        <option value="1">Urdu</option>
                        <option value="2">Maths</option>
                        <option value="3">Computer</option>
                    </select>
                </div> */}
                <div className="mb-3">
                    <label className="form-label">Contact</label>
                    <input type="text" className="form-control" value={contact} onChange={(e) => setContact(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
                <ToastContainer/>
            </form>
        </>
    )
}

export default Editing
