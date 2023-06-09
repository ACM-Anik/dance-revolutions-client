import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import { useState } from "react";


const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    // const [disabled, setDisabled] = useState(false);

    const handleMakeInstructor = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Want to make the user instructor?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Make Instructor!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/instructor/${user._id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Done!',
                                'Making Instructor Successful.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Want to make the user admin?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Make Admin!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/admin/${user._id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Done!',
                                'Making Admin Successful.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    const handleDelete = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Manage User | Dance Revolutions</title>
            </Helmet>
            <div className="mt-6 mb-10">
                <h1 className="text-3xl font-bold border-l-4 border-[#2088d8] p-2">Manage Users</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead className="bg-black text-white rounded">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Instructor</th>
                            <th>Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td className="text-base font-semibold">{user.name}</td>
                                <td className="text-base font-semibold">{user.email}</td>
                                <td className="text-base font-semibold">
                                    {user.role === 'Instructor' ? <span className="text-base font-semibold text-center">Instructor</span> : <button onClick={() => handleMakeInstructor(user)} className="btn bg-black  text-white hover:text-black">Make Instructor</button>}
                                </td>
                                <td>
                                    {user.role === 'Admin' ? <span className="text-base font-semibold text-center">Admin</span> : <button onClick={() => handleMakeAdmin(user)} className="btn bg-black  text-white hover:text-black">Make Admin</button>}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn  bg-red-600  text-white hover:text-black"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;