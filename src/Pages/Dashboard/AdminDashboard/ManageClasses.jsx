import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { useState } from "react";


const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const [disabledStates, setDisabledStates] = useState({});

    const { data: allClasses = [], refetch } = useQuery(['allClasses'], async () => {
        const res = await axiosSecure.get('/allClasses');
        return res.data;
    });

    const handleApprove = (single) => {
        axiosSecure.patch(`/allClasses/approve/${single._id}`, single._id)
            .then(() => {
                setDisabledStates(prevState => ({...prevState, [single._id]: true}));
                refetch();
            });
    };

    const handleDeny = (single) => {
        axiosSecure.patch(`/allClasses/deny/${single._id}`, single._id)
            .then(() => {
                setDisabledStates(prevState => ({...prevState,[single._id]: true}));
                refetch();
            });
    };

    return (
        <div>
            <Helmet>
                <title>Manage Classes | Dance Revolutions</title>
            </Helmet>
            <div className="mt-6 mb-10">
                <h1 className="text-3xl font-bold border-l-4 border-[#2088d8] p-2">Manage Users</h1>
            </div>
            <div>
                {allClasses.map((single) => (
                    <div key={single._id} className="grid md:grid-cols-2 gap-6 my-4 p-4 shadow-lg border-2 rounded">
                        <div className="flex flex-col gap-2">
                            <img src={single.photo} alt="class" className="h-[220px] lg:h-[280px] w-[380px] lg:w-full object-cover" />
                        </div>
                        <div className="">
                            <div className="flex flex-col gap-2">
                                <h4 className="text-4xl font-bold">{single.name}</h4>
                                <p className="text-base font-semibold">Instructor: {single.instructor}</p>
                                <p className="text-base font-semibold">Email: {single.instructorEmail}</p>
                                <p className="text-base font-semibold">Price: ${single.price}</p>
                                <p className="text-base font-semibold">AvailableSeats: {single.availableSeats}</p>
                                <p className="text-base font-semibold">Status: {single.status}</p>
                            </div>
                            <div className="mt-8 flex gap-2">
                                {
                                single.status === 'Approved' || single.status === 'Denied' ?
                                    <button disabled className="btn btn-ghost border-2 border-black text-black hover:text-white hover:bg-black">Approved</button>
                                :
                                    <button
                                        disabled={disabledStates[single._id]}
                                        onClick={() => handleApprove(single)}
                                        className="btn btn-ghost border-2 border-black text-black hover:text-white hover:bg-black">Approve</button>
                                }
                                {
                                    single.status === 'Approved' || single.status === 'Denied' ?
                                        <button disabled className="btn btn-ghost border-2 border-black text-black hover:text-white hover:bg-red-600">Deny</button>
                                    :
                                        <button 
                                        disabled={disabledStates[single._id]}
                                        onClick={() => handleDeny(single)}
                                        className="btn btn-ghost border-2 border-black text-black hover:text-white hover:bg-red-600">Deny</button>

                                }
                                <button className="btn btn-ghost border-2 border-black text-black hover:text-white hover:bg-black">Send Feedback</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageClasses;

