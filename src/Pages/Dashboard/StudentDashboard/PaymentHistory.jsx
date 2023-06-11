import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";


const PaymentHistory = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: paymentHistory = [] } = useQuery({
        enabled: !loading,
        queryKey: ['paymentHistory', user?.email],

        queryFn: async () => {
            const res = await axiosSecure(`/paymentHistory?email=${user?.email}`)
            return res.data;
        },
    })
    

    return (
        <div className="w-full bg-[#2088d851] h-full">
            <Helmet>
                <title>Payment History | Dance Revolutions</title>
            </Helmet>
            <h3>Payment History</h3>
            <div className="overflow-x-auto w-full p-10">
                <table className="table w-full bg-base-100">
                    <thead className="">
                        <tr className="bg-black text-white rounded-lg">
                            <th>#</th>
                            <th className="text-center">Image</th>
                            <th className="text-center">Class Name</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Payment Date</th>
                            <th className="text-center">transaction ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentHistory.map((single, index) => <tr
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
                                    {single.className}
                                </td>
                                <td className="text-center">${single.price}</td>   
                                <td className="text-center">${single.date}</td>   
                                <td className="text-center">${single.transactionId}</td>   
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;