import { useEffect, useState } from "react";
import ApprovedClassCard from "./ApprovedClassCard";


const Classes = () => {
    const [approvedClasses, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/approvedClasses')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setClasses(data);
            })
    }, []);

    
    return (
        <div>
            <div className="my-8">
                <h1 className="text-3xl font-bold border-l-4 border-[#2088d8] p-2">Our Classes</h1>
            </div>
            <div className="my-10 ">
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