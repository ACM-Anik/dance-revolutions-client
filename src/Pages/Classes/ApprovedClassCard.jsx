import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const ApprovedClassCard = ({ classes }) => {
    const { _id, name, photo, price, availableSeats, instructor } = classes;

    const { user } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();



    useEffect(() => {
        // if(availableSeats === 0 || user ? user.role === "Admin" : user.role === "Instructor"){
        //     setDisabled(true);
        //     return;
        // }

        if (user) {
            if (user?.role === "Admin") {
                setDisabled(true);
                return;
            }
            else if (user?.role === "Instructor") {
                setDisabled(true);
                return;
            }
            else {
                setDisabled(false);
            }
        }

        if (availableSeats === 0) {
            setDisabled(true);
            return;
        }
        else {
            setDisabled(false);
        }

    }, [availableSeats, user]);


    const handleSelect = (classes) => {
        // TODO: post the Selected class 
        console.log(classes);

        if (user) {
            const selectedClass = { selectedId: _id, name, photo, price, availableSeats, email: user.email };

            fetch('http://localhost:5000/selectedClasses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        toast.success("Successfully selected!");
                    }
                })
        }
        else {
            toast.error("Sorry! You have to login first.");
            navigate('/login', { state: { from: location } });
        }

    }


    return (
        <div className={`md:flex justify-between card-compact ${availableSeats === 0 ? "bg-red-500" : "bg-base-100"} shadow-xl border-2 rounded mx-20 my-8`}>
            <figure><img src={photo} alt="Dance" className="h-[320px] w-[480px] object-cover p-5 rounded" /></figure>
            <div className="card-body gap-0">
                <h2 className="text-3xl font-bold">{name}</h2>
                <p className="text-base font-semibold">Instructor: {instructor}</p>
                <p className="text-base font-semibold">Available: {availableSeats} seats</p>
                <p className="text-base font-semibold">Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button disabled={disabled} onClick={() => handleSelect(classes)} className="btn border-black bg-[#FFFFFF]">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ApprovedClassCard;