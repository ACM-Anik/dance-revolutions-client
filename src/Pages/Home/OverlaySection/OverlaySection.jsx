// import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const OverlaySection = () => {
    return (
        <div className=" relative h-[480px]">
            <div>
                <img src="https://i.ibb.co/TcpXczQ/Classic.jpg" alt="" className="h-[320px] w-full bg-cover bg-center object-cover rounded-lg" />
            </div>
            <div className=" mx-auto">
                <div className="absolute top-40 left-0  h-full w-full px-16">
                    <div className=" flex flex-col items-center justify-center shadow-lg bg-sky-100 bg-opacity-80 text-black rounded-lg h-[320px]">
                        <h1 className="text-5xl mb-4 shadow-secondary font-thin">Why Do You Walk?</h1>
                        <p className="text-2xl font-thin">When you can dance!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverlaySection;