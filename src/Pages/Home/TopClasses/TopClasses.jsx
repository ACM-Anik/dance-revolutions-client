

const TopClasses = ({ topClass }) => {
    const { photo, name } = topClass;

    return (
        <div className="card md:w-96 px-2 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Dance" className="h-[280px]" style={{width: "100%"}}/></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge bg-[#2088d8]">Top</div>
                </h2>
                
            </div>
        </div>
    );
};

export default TopClasses;