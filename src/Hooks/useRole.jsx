import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const useRole = () => {
    const {user, loading} = useContext(AuthContext);
    const  [axiosSecure] = useAxiosSecure();

    // Admin:
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.Admin;
        }
    })

    // Instructor:
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return res.data.Instructor;
        }
    })

    return [isAdmin, isAdminLoading, isInstructor, isInstructorLoading];
}
export default useRole;