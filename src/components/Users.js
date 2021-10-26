import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://user-management-shovon.herokuapp.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    // delete an user 
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            iconClass: "custom-icon",
            showCancelButton: true,
            confirmButtonClass: "swal-button",
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonClass: "swal-button",
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://user-management-shovon.herokuapp.com/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            toast.error("Deleted User Successfully")
                            const remainingUsers = users.filter(user => user._id !== id)
                            setUsers(remainingUsers)
                        }
                    })


                // fetch(`http://localhost:5000/users/${id}`, {
                //     method: 'DELETE'
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         if (data.deletedCount > 0) {
                //             toast.error("Deleted User Successfully")
                //             const remainingUsers = users.filter(user => user._id !== id)
                //             setUsers(remainingUsers)
                //         }
                //     })

            }
        })
    }

    return (
        <div>
            <h4 className="bg-secondary py-2 text-white">Users Available: {users.length}</h4>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {
                        users.map(user => {
                            return <div key={user._id} className="col">
                                <div className="border p-3 bg-light shadow-sm overflow-hidden">
                                    <h5><span className="fw-light">Name:</span> {user.name}</h5>
                                    <p className="mb-1">Email: <span className="text-primary">{user.email}</span></p>
                                    <p className="mb-2"><small>Phone: {user.phone}</small></p>
                                    <Link to={`/UpdateUser/${user._id}`}>
                                        <button className="btn btn-success btn-sm me-3">Update</button>
                                    </Link>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user._id)} >Delete</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <ToastContainer theme="colored" />
        </div>
    );
};

export default Users;