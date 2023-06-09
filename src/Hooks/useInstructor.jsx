import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const useInstructor = () => {
    const {user, loading} = useContext(AuthContext);
    const  [axiosSecure] = useAxiosSecure();

    
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return res.data.Instructor;
        }
    })

    return [ isInstructor, isInstructorLoading ];
}
export default useInstructor;