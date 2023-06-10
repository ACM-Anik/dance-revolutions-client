
const InstructorsCard = ({ instructor }) => {
    const { _id, photo, name, email } = instructor;

    const handleSelect = () => {
        // console.log(_id);
    }

    return (
        <div className="grid md:grid-cols-2  bg-base-100 shadow-xl border-2 rounded mx-20 my-8">
            <figure><img src={photo} alt="Dance" className="h-[320px] lg:h-[380px] md:w-[380px] lg:w-full object-cover p-5 rounded-lg" /></figure>
            <div className="p-5 flex flex-col justify-center gap-4">
                <div>
                    <h2 className="text-4xl font-bold">{name}</h2>
                    <p className="text-base font-semibold">Email: {email}</p>
                </div>
                <div className="">
                    <button onClick={() => handleSelect(_id)} className="btn border-black bg-[#FFFFFF]">See Classes</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorsCard;