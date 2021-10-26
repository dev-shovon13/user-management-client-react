import axios from 'axios';
import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUser = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const numberRef = useRef()
    const submitHandler = (e) => {
        e.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const phone = numberRef.current.value

        const newUser = { name, email, phone }

        axios.post('https://user-management-shovon.herokuapp.com/users', newUser)
            .then(function (res) {
                if (res.data.insertedId) {
                    toast.success("Added User Successfully")
                    e.target.reset()
                }
            })
            .catch(function (error) {
                console.log(error);
            })

        // fetch("http://localhost:5000/users", {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newUser)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             toast.success("Added User Successfully")
        //             e.target.reset()
        //         }
        //     })
    }
    return (
        <div>
            <h4 className="bg-secondary py-2 text-white">Add User</h4>
            <form className="w-25 mx-auto py-5 form-width" onSubmit={submitHandler}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter Your Name" required ref={nameRef} />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Enter Your Email" required ref={emailRef} />
                </div>
                <div className="mb-3">
                    <input type="number" className="form-control" placeholder="Enter Your Phone Number" required ref={numberRef} />
                </div>
                <button type="submit" className="btn btn-secondary w-100" >Add User</button>
            </form>
            <ToastContainer theme="colored" />
        </div>
    );
};

export default AddUser;