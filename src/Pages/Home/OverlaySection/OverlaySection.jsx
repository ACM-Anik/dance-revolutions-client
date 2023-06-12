import Fade from 'react-reveal/Fade';


const OverlaySection = () => {
    return (
        <div className=" relative h-[480px]">
            <div>
                <img src="https://i.ibb.co/TcpXczQ/Classic.jpg" alt="" className="h-[320px] w-full bg-cover bg-center object-cover rounded-lg" />
            </div>
            <div className=" mx-auto">
                <div className="absolute top-40 left-0  h-full w-full px-4 md:px-16">
                    <div className=" flex flex-col items-center justify-center shadow-lg bg-sky-100 bg-opacity-80 text-black rounded-lg h-[320px]">
                        <Fade bottom big>
                            <h1 className="text-5xl mb-4 shadow-secondary font-thin text-center">Why Do You Walk?</h1>
                            <p className="text-2xl font-thin">When you can dance!</p>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverlaySection;