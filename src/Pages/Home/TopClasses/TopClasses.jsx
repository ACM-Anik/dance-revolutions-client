import Zoom from 'react-reveal/Zoom';


const TopClasses = ({ topClass }) => {
    const { photo, name } = topClass;

    return (
        <Zoom bottom>
            <div className="card md:w-96 p-2 bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Dance" className="h-[280px]" style={{ width: "100%" }} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge bg-[#2088d8]">Top</div>
                    </h2>

                </div>
            </div>
        </Zoom>
    );
};

export default TopClasses;