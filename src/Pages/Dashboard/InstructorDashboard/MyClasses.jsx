import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import MyAddClassesCard from "./MyAddClassesCard";


const MyClasses = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: myAddedClasses = [] } = useQuery({
        enabled: !loading,
        queryKey: ['selectedClasses', user?.email],

        queryFn: async () => {
            const res = await axiosSecure(`/myAddedClasses?email=${user?.email}`)
            return res.data;
        },
    })

    console.log(myAddedClasses);

    return (
        <div className="bg-[#2088d851] w-full h-full">
            <Helmet>
                <title>My Added Classes | Dance Revolutions</title>
            </Helmet>
            <div className="py-8">
                <h1 className="text-3xl font-bold border-l-4 border-[#2088d8] p-2">My Classes</h1>
            </div>
            <div className="py-10 ">
                {
                    myAddedClasses.map(singleClass => <MyAddClassesCard key={singleClass._id} singleClass={singleClass} refetch={refetch}></MyAddClassesCard>)
                }

            </div>
        </div>
    );
};

export default MyClasses;