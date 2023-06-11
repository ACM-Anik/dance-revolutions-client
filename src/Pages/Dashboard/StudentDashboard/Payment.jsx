import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet-async";
import CheckoutForm from "./CheckoutForm";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { AuthContext } from "../../../Providers/AuthProvider";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const {loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {id} = useParams();


    const { data: selectedClass = [] } = useQuery({
        enabled: !loading,
        queryKey: ['selectedClasses', id],
        
        queryFn: async () => {
            const res = await axiosSecure(`/selectedClasses/${id}`)
            return res.data;
        },
    })

    // console.log(id, selectedClass);


    return (
        <div className="w-full bg-[#2088d851] h-full">
            <Helmet>
                <title>Payment | Dance Revolutions</title>
            </Helmet>
            <div className="py-8">
                <h1 className="text-3xl font-bold border-l-4 border-[#2088d8] p-2">Payment</h1>
            </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm selectedClass={selectedClass} ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;