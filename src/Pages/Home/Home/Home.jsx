import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import TopClasses from "../TopClasses/TopClasses";
import TopInstructors from "../TopInstructors/TopInstructors";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import OverlaySection from "../OverlaySection/OverlaySection";


const Home = () => {
    const [topClasses, setTopClasses] = useState([]);

    useEffect(() => {
        fetch('https://dance-revolutions-server.vercel.app/topClasses')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setTopClasses(data);
            })
    }, [])

    return (
        <div>
            <Banner></Banner>
            <div className="my-20">
                <OverlaySection></OverlaySection>
            </div>
            <div className="my-20 mx-auto">
                <SectionTitle subHeading="Book Your Seat" heading="OUR TOP CLASSES"></SectionTitle>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
                    {
                        topClasses.map(topClass => <TopClasses key={topClass._id} topClass={topClass}></TopClasses>)
                    }
                </div>
            </div>
            <div className="my-20 mx-auto">
                <SectionTitle subHeading="Join Immediately" heading="OUR TOP Instructors"></SectionTitle>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
                    {
                        topClasses.map(topInstructor => <TopInstructors key={topInstructor._id} topInstructor={topInstructor}></TopInstructors>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Home;