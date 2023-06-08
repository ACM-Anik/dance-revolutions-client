const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-[#2088d8] mb-1">~~~ {subHeading} ~~~</p>
            <h3 className="text-3xl uppercase border-b-4 py-4 font-bold">{heading}</h3>
        </div>
    );
};

export default SectionTitle;