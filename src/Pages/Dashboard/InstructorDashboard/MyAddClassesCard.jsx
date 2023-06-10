

const MyAddClassesCard = ({singleClass}) => {
    const {
        _id, 
        name, 
        photo, 
        price, 
        availableSeats, 
        seats, 
        status
    } = singleClass;
    const total = seats - availableSeats;

    const handleUpdate = () => {
        // No requirement for this 
    }

    return (
        <div className="grid md:grid-cols-2  bg-base-100 shadow-xl border-2 rounded mx-20 my-8">
            <figure><img src={photo} alt="Dance" className="h-[320px] lg:h-[380px] md:w-[380px] lg:w-full object-cover p-5 rounded-lg" /></figure>
            <div className="p-5 flex flex-col justify-center gap-4">
                <div className="flex flex-col gap-2">
                    <h2 className="text-4xl font-bold">{name}</h2>
                    <p className="text-base font-semibold">Price: ${price}</p>
                    <p className="text-base font-semibold">Available Seats: {availableSeats}</p>
                    <p className="text-base font-semibold">Total Enrolled: {total}</p>
                    <p className="text-base font-semibold">Status: {status}</p>
                    {
                        singleClass?.feedback && 
                        <p className="text-base font-semibold">Feedback: {singleClass.feedback}</p>
                    }
                </div>
                <div className="">
                    <button onClick={() => handleUpdate(_id)} className="btn border-black bg-[#FFFFFF]">Update</button>
                </div>
            </div>
        </div>
    );
};

export default MyAddClassesCard;