import { AiFillCloseCircle } from "react-icons/ai";
import { GET_USER_DETAILS } from "../../Queries/UserQueries";
import { useQuery } from "@apollo/client";
import LoadingAnimation from "../UI/LoadingAni";
import bcrypt from "bcryptjs";
import { UserContext } from "../../Context/UserContext";
import { useContext , useState} from "react";
import { useForm } from "react-hook-form";

const EditProfileModal = ({ isVisible, onClose }) => {
  const { user } = useContext(UserContext);
  // const [errorShown, setErrorShown] = useState(false);
  // const [errorShown1, setErrorShown1] = useState(false);

  if (!isVisible) {
    return null;
  }
  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };
  const { loading, error, data } = useQuery(GET_USER_DETAILS, {
    variables: { id: user },
  });
  if (loading) return <LoadingAnimation />;
  if (error) {
    console.log(error);
    return <p>Something Went Wrong</p>;
  }

  const { register, control, handleSubmit, watch } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const hashedPassword = data.user.password;

  const onSubmit = async (data) => {
    if (!data.newPassword === data.confirmPassword) {
      // setErrorShown(true);
      console.log("passwords don't match");
    } 

    const isEqual= bcrypt.compare(data.password, hashedPassword, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        // Check the result of the comparison
        if (res) {
          console.log("The password is correct!");
          return true;
        } else {
          console.log("The password is incorrect.");
          return false;
        }
      }
    });

    if (!isEqual){
      console.log("passwords incorrect");
      // setErrorShown1(true);
    }

  };

  // const pasword = "12345678";

  console.log(data);

  return (
    <div
      id="wrapper"
      onClick={handleClose}
      className="fixed h-full inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center max-h-full overflow-auto "
    >
      <div className=" w-[50%]">
        <div className="bg-white p-2 rounded text-black flex flex-col text-start">
          <AiFillCloseCircle
            size={30}
            onClick={() => onClose()}
            className="place-self-end cursor-pointer"
          />
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full px-10 bg-white pt-5 pb-5 mb-4 md:w-full"
            >
              <h3 className="text-center text-black text-3xl md:text-3xl mb-7 font-semibold ">
                Change Password
              </h3>
              {/* {errorShown && (
                <div className="bg-[#fdc0c0] border-2 border-[red] w-full flex justify-center py-2 rounded-md mb-6">
                  <p>Passwords don't match</p>
                </div>
              )}
              {errorShown1 && (
                <div className="bg-[#fdc0c0] border-2 border-[red] w-full flex justify-center py-2 rounded-md mb-6">
                  <p>Current password is incorrect</p>
                </div>
              )} */}
              <div className="mb-4 relative">
                <input
                  placeholder=" "
                  {...register("password")}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-5 w-full text-md text-black border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-green peer"
                />
                <label className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-[#243C74] peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Current Password
                </label>
              </div>
              <div className="mb-4 relative">
                <input
                  placeholder=" "
                  {...register("newPassword")}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-5 w-full text-md text-black border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-green peer"
                />
                <label className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-[#243C74] peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  New Password
                </label>
              </div>

              <div className="mb-4 relative">
                <input
                  placeholder=" "
                  {...register("confirmPassword")}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-5 w-full text-md text-black border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-green peer"
                />
                <label className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-[#243C74] peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Confirm New Password
                </label>
              </div>

              <button className="bg-[#243C74] focus:shadow-outline focus:outline-none hover:bg-[#2b4583] mt-10 text-white font-bold px-6 md:text-lg rounded-md w-full mb-3 py-2">
                {/* {loading ? "Sending" : "Login"} */} Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
