import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

// ToDo:----
// const img_hosting_token = import.meta.env.VITE_Image_upload_token;

const AddAClass = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    // console.log(img_hosting_token);
    
    // const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const handleAddClass = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        // const photo = form.photo.files[0];
        const photo = form.photo.value;
        const instructor = form.instructor.value;
        const instructorEmail = form.instructorEmail.value;
        const price = form.price.value;
        const availableSeats = form.availableSeats.value;

        const newClass = { name, photo, instructor, instructorEmail, price: parseFloat(price), seats: 30, availableSeats: parseFloat(availableSeats), status: 'Pending' }
        console.log(newClass);

        // const formData = new FormData();
        // formData.append('photo', newClass.files[0])

        // fetch(img_hosting_url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(imgResponse => {
        //         console.log(imgResponse)
        //         if (imgResponse.success) {
                    // const imgURL = imgResponse.data.display_url;
                    // const { name, price, category, recipe } = data;
                    // const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL };
                    // console.log(newItem);
                  
                    axiosSecure.post('/allClasses', newClass)
                        .then(data => {
                            console.log("After posting new menu item", data.data);
                            if (data.data.insertedId) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Item added successfully!',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
            //     }
            // })
    };

    return (
        <div className="w-full bg-[#2088d851] h-full">
            <Helmet>
                <title>Add A Class | Dance Revolutions</title>
            </Helmet>
            <div className="py-8">
                <h1 className="text-3xl font-bold border-l-4 border-[#2088d8] p-2">My Selected Classes</h1>
            </div>
            <div className="px-6">
                <form onSubmit={handleAddClass}>

                    <div className="md:flex justify-center gap-4 items-center">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Class name</span>
                            </label>
                            <input type="text" name="name" required placeholder="Class name" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Class Photo</span>
                            </label>
                            {/* <input type="file" name="photo" required className="file-input file-input-bordered w-full " /> */}
                            <input type="text" placeholder="photoURL" name="photo" required className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className="md:flex justify-center gap-4 items-center">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor Name</span>
                            </label>
                            <input type="text" disabled  defaultValue={user?.displayName} placeholder="Instructor Name"  name="instructor" required className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor Email</span>
                            </label>
                            <input type="email" disabled defaultValue={user?.email} placeholder="Instructor Email"  name="instructorEmail" required className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className="md:flex justify-center gap-4 items-center">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Available Seats</span>
                            </label>
                            <input type="number" placeholder="Class name" name="availableSeats" required className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Price</span>
                            </label>
                            <input type="number" placeholder="Type here"  name="price" required className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className="w-1/2 mx-auto my-3">
                        <input className="btn bg-black text-white hover:text-black w-full" type="submit" value="Add Class" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAClass;