import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const MyEnrolledClasses = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: myEnrolledClasses = [] } = useQuery({
        enabled: !loading,
        queryKey: ['myEnrolledClasses', user?.email],

        queryFn: async () => {
            const res = await axiosSecure(`/myEnrolledClasses?email=${user?.email}`)
            return res.data;
        },
    })

    return (
        <div className="w-full bg-[#2088d851] h-full">
            <Helmet>
                <title>My Enrolled Classes | Dance Revolutions</title>
            </Helmet>
            <div className="py-8">
                <h1 className="text-3xl font-bold border-l-4 border-[#2088d8] p-2">My Enrolled Classes</h1>
            </div>
            <div className="py-10 ">
                {
                    myEnrolledClasses.map(singleClass => (
                        <div key={singleClass._id} className="grid md:grid-cols-2  bg-base-100 shadow-xl border-2 rounded mx-20 my-8">
                            <figure><img src={singleClass?.photo} alt="Dance" className="h-[260px] lg:h-[380px] md:w-[380px] lg:w-full object-cover p-5 rounded-lg" /></figure>
                            <div className="p-5 flex flex-col justify-center gap-4">
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-5xl font-bold mb-4">{singleClass?.className}</h2>
                                    <p className="text-xl font-semibold">Instructor: {singleClass?.instructor}</p>
                                    <p className="text-xl font-semibold">Price: ${singleClass?.price}</p>
                                    <p className="text-xl font-semibold">Available Seats: {singleClass?.availableSeats}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default MyEnrolledClasses;