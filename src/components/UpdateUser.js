import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const UpdateUser = () => {
    const [user, setUser] = useState({})
    const { id } = useParams()
    const history = useHistory()
    useEffect(() => {
        fetch(`https://user-management-shovon.herokuapp.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // update user 
    const updateName = (e) => {
        const updatedName = e.target.value
        // const updatedUser = { name: updatedName, email: user.email, phone: user.phone }
        const updatedUser = { ...user }
        updatedUser.name = updatedName
        setUser(updatedUser)
    }

    const updateEmail = (e) => {
        const updatedEmail = e.target.value
        const updatedUser = { ...user }
        updatedUser.email = updatedEmail
        setUser(updatedUser)
    }
    const updatePhone = (e) => {
        const updatedPhone = e.target.value
        const updatedUser = { ...user }
        updatedUser.phone = updatedPhone
        setUser(updatedUser)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`https://user-management-shovon.herokuapp.com/users/${id}`, user)
            .then(function (res) {
                if (res.data.modifiedCount > 0) {
                    toast.success("Updated User Successfully")
                    setUser({})
                    setTimeout(() => history.goBack(), 2000);
                } else {
                    toast.info("No Changes Made")
                }
            })
            .catch(function (error) {
                toast.error(error);
            })

        // fetch(url, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(user)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.modifiedCount > 0) {
        //             toast.success("Updated User Successfully")
        //             setUser({})
        //             setTimeout(() => history.goBack(), 2000);
        //         } else {
        //             toast.info("No Changes Made")
        //         }
        //     })
    }
    return (
        <div>
            <h4 className="bg-secondary py-2 text-white">Update User</h4>
            <form className="w-25 mx-auto py-5 form-width" onSubmit={submitHandler}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter Your Name" onChange={updateName} value={user.name || ""} />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Enter Your Email" onChange={updateEmail} value={user.email || ""} />
                </div>
                <div className="mb-3">
                    <input type="number" className="form-control" placeholder="Enter Your Phone Number" onChange={updatePhone} value={user.phone || ""} />
                </div>
                <button type="submit" className="btn btn-secondary w-100" >Update User</button>
            </form>
            <ToastContainer theme="colored" />
        </div>
    );
};

export default UpdateUser;