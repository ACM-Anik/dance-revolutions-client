import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { useRef } from 'react';
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";




const ManageFeedback = () => {
    const {id} = useParams();
    const feedbackRef = useRef(null);
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();

    const handleSubmit = () => {
        const feedback= feedbackRef.current.value;

        axiosSecure.patch(`/allClasses/feedback/${id}`, {feedback})
            .then(() => {
                toast.success('Successfully feedback sent!')
                navigate('/dashboard/manageClasses', { replace: true });
            });
        
    };

    return (
        <div className="pb-20 bg-[#2088d851]">
            <Helmet>
                <title>Feedback | Dance Revolutions</title>
            </Helmet>
            <div className="pt-6 mb-6">
                <h1 className="text-3xl font-bold border-l-4 border-[#2088d8] p-2">Feedback</h1>
            </div>
            <div className="w-[600px] mx-auto ">
                <textarea className="textarea textarea-info w-full h-[300px]" placeholder="Feedback" ref={feedbackRef}></textarea>
                <div className="w-1/2 mx-auto">
                    <button onClick={handleSubmit} className="w-full btn btn-ghost shadow-lg border-2 border-black text-black hover:text-white hover:bg-black">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ManageFeedback;