import { useEffect, useState } from "react";
import ApprovedClassCard from "./ApprovedClassCard";


const Classes = () => {
    const [approvedClasses, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://dance-revolutions-server.vercel.app/approvedClasses')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
            })
    }, []);

    
    return (
        <div className="bg-[#2088d851]">
            <div className="py-8">
                <h1 className="text-3xl font-bold border-l-4 border-[#2088d8] p-2">Our Classes</h1>
            </div>
            <div className="py-10 ">
                {
                    approvedClasses.map(classes =>
                        <ApprovedClassCard
                            key={classes._id}
                            classes={classes}
                        ></ApprovedClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;