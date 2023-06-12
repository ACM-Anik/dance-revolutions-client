import { useEffect, useState } from "react";
import InstructorsCard from "./InstructorsCard";


const Instructors = () => {
    const [allInstructors, setAllInstructors] = useState([]);

    useEffect(() => {
        fetch('https://dance-revolutions-server.vercel.app/users/instructors')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAllInstructors(data);
            })
    }, []);
    return (
        <div className="bg-[#2088d851]">
            <div className="py-8">
                <h1 className="text-3xl font-bold border-l-4 border-[#2088d8] p-2">Our Instructors</h1>
            </div>
            <div className="my-10 ">
                {
                    allInstructors.map(instructor => <InstructorsCard key={instructor._id} instructor={instructor}></InstructorsCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;