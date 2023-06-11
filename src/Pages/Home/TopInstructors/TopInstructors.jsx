

const TopInstructors = ({topInstructor}) => {
    const {instructor, instructorPhoto, } = topInstructor;
    return (
        <div className="card md:w-96 px-2 bg-base-100 shadow-xl">
            <figure><img src={instructorPhoto} alt="Dance" className="h-[280px] object-cover" style={{width: "100%"}}/></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {instructor}
                    <div className="badge bg-[#2088d8]">Top</div>
                </h2>
                
            </div>
        </div>
    );
};

export default TopInstructors;