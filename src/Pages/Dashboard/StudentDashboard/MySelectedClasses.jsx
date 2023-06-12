import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { FaTrashAlt } from "react-icons/fa";


const MySelectedClasses = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: selectedClasses = [] } = useQuery({
        enabled: !loading,
        queryKey: ['selectedClasses', user?.email],
        
        queryFn: async () => {
            const res = await axiosSecure(`/selectedClasses?email=${user?.email}`)
            return res.data;
        },
    })

    const total = selectedClasses.reduce((sum, single) => single.price + sum, 0);
    const price = parseFloat(total.toFixed(2));

    const handleDelete = single => {
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
                fetch(`https://dance-revolutions-server.vercel.app/selectedClasses/${single._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your selected class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full bg-[#2088d851] h-full">
            <Helmet>
                <title>My Selected Classes | Dance Revolutions</title>
            </Helmet>
            <div className="py-8">
                <h1 className="text-3xl font-bold border-l-4 border-[#2088d8] p-2">My Selected Classes</h1>
            </div>
            <div className="uppercase font-semibold h-[70px] flex justify-center items-center gap-8">
                <h3 className="text-3xl bg-base-100 p-4 rounded-lg">Total Class: {selectedClasses.length}</h3>
                <h3 className="text-3xl bg-base-100 p-4 rounded-lg">Total Price: ${price}</h3>
            </div>
            <div className="overflow-x-auto w-full p-10">
                <table className="table w-full bg-base-100">
                    <thead className="">
                        <tr className="bg-black text-white rounded-lg">
                            <th>#</th>
                            <th className="text-center">Classes</th>
                            <th className="text-center">Class Name</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Action</th>
                            <th className="text-center">Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClasses.map((single, index) => <tr
                                key={single._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td className="text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={single.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center">
                                    {single.name}
                                </td>
                                <td className="text-center">${single.price}</td>
                                <td className="text-center">
                                    <button onClick={() => handleDelete(single)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                                <td className="text-center"><Link to={`/dashboard/payment/${single._id}`}><button className="btn btn-sm bg-black text-white ">PAY</button></Link></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;