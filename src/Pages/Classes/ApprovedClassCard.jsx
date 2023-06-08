import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const ApprovedClassCard = ({ classes }) => {
    const { _id, name, photo, price, availableSeats, instructor } = classes;

    const {user} = useContext(AuthContext);

    const  [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if(availableSeats === 0 || user ? user?.role === "Admin" :  "Instructor"){
            setDisabled(true);
        }
        
    }, [availableSeats, user])

    const handleSelect = () => {

    }

    return (
        <div className={`md:flex justify-between card-compact ${availableSeats === 0 ? "bg-red-500" : "bg-base-100"} shadow-xl border-2 rounded mx-20 my-8`}>
            <figure><img src={photo} alt="Dance" className="h-[320px] w-[480px] object-cover p-5 rounded"/></figure>
            <div className="card-body">
                <h2 className="text-3xl font-bold">{name}</h2>
                <p className="text-base font-semibold">Instructor: {instructor}</p>
                <p className="text-base font-semibold">Available: {availableSeats} seats</p>
                <p className="text-base font-semibold">Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button disabled={disabled} onClick={() => handleSelect(_id)} className="btn border-black bg-[#FFFFFF]">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ApprovedClassCard;