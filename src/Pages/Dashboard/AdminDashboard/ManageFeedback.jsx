import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { useRef } from 'react';
import { toast } from "react-hot-toast";




const ManageFeedback = () => {
    const id = useLoaderData();
    const feedbackRef = useRef(null);

    const handleSubmit = () => {
        const feedback= feedbackRef.current.value;
        // console.log(feedback);
        fetch(`http://localhost:5000/allClasses/feedback/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feedback),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Feedback Sent successfully:', data);
                toast.success('Successfully feedback sent !')
            })
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