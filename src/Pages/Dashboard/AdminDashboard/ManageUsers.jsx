import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
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
                axiosSecure.patch(`/users/instructor/${user._id}`)
                    .then((response) => {
                        if (response.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire(
                                "Done!",
                                "Making Instructor Successful.",
                                "success"
                            );
                        }
                    })
                    .catch((error) => {
                        console.error("Error, making user instructor:", error);
                    });
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
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then((response) => {
                        if (response.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire("Done!", "Making Admin Successful.", "success");
                        }
                    })
                    .catch((error) => {
                        console.error("Error making user admin:", error);
                    });
            }
        })

    }


    return (
        <div className="w-full bg-[#2088d851] h-full">
            <Helmet>
                <title>Manage Users | Dance Revolutions</title>
            </Helmet>
            <div className="mt-6 mb-10">
                <h1 className="text-3xl font-bold border-l-4 border-[#2088d8] p-2">Manage Users</h1>
            </div>
            <div className="overflow-x-auto p-6">
                <table className="table table-zebra w-full bg-white">
                    <thead className="bg-black text-white rounded">
                        <tr>
                            <th className="text-center">#</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Instructor</th>
                            <th className="text-center">Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td className="text-center text-base font-semibold">{user.name}</td>
                                <td className="text-center text-base font-semibold">{user.email}</td>
                                <td className="text-center text-base font-semibold">
                                    {user.role === 'Instructor' ? <span className="text-base font-semibold text-center">Instructor</span> : <button onClick={() => handleMakeInstructor(user)} className="btn bg-black text-white hover:text-black">Make Instructor</button>}
                                </td>
                                <td className="text-center text-base font-semibold">
                                    {user.role === 'Admin' ? <span className="text-base font-semibold text-center">Admin</span> : <button onClick={() => handleMakeAdmin(user)} className="btn bg-black  text-white hover:text-black">Make Admin</button>}
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