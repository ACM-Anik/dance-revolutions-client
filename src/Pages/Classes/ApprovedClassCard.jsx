import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";


const ApprovedClassCard = ({ classes }) => {
    const { _id, name, photo, price, availableSeats, instructor } = classes;

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();



    useEffect(() => {
        if (user) {
            if (isAdmin || isInstructor) {
                setDisabled(true);
                return;
            }
        }

        if (availableSeats === 0) {
            setDisabled(true);
            return;
        }

    }, [availableSeats, user, isAdmin, isInstructor]);


    const handleSelect = () => {
        // TODO: post the Selected class 

        if (user) {
            const selectedClass = { selectedId: _id, name, photo, price, availableSeats, email: user.email, instructor };

            fetch('https://dance-revolutions-server.vercel.app/selectedClasses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setDisabled(true);
                        toast.success("Successfully selected!");
                    }
                    if (data.enrolled) {
                        setDisabled(true);
                        toast.error("Already Enrolled!");
                        console.log(data);
                    }
                    if (data.exists) {
                        setDisabled(true);
                        toast.error("Already exists!");
                        console.log(data);
                    }
                })
        }
        else {
            toast.error("Sorry! You have to login first.");
            navigate('/login', { state: { from: location } });
        }

    }


    return (
        <div className={`grid md:grid-cols-2 justify-between card-compact ${availableSeats === 0 ? "bg-red-500" : "bg-base-100"} shadow-xl border-2 rounded mx-20 my-8`}>
            <figure><img src={photo} alt="Dance" className="h-[320px] lg:h-[380px] w-[400px] lg:w-full object-cover p-5 rounded-lg" /></figure>
            <div className="flex flex-col justify-between p-4 gap-4">
                <div className="flex flex-col gap-4">
                    <h2 className="text-5xl font-bold">{name}</h2>
                    <p className="text-base font-semibold">Instructor: {instructor}</p>
                    <p className="text-base font-semibold">Available: {availableSeats} seats</p>
                    <p className="text-base font-semibold">Price: ${price}</p>
                </div>
                <div className="card-actions justify-end">
                    <button disabled={disabled} onClick={() => handleSelect(classes)} className="btn border-black bg-[#FFFFFF]">Select The Class</button>
                </div>
            </div>
        </div>
    );
};

export default ApprovedClassCard;