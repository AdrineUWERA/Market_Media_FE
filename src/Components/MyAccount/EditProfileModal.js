import { AiFillCloseCircle } from "react-icons/ai";
import { GET_USER_DETAILS } from "../../Queries/UserQueries";
import { useMutation } from "@apollo/client"; 
import { EDIT_USER } from "../../Mutations/UserMutations";
import { useState } from "react";

const EditProfileModal = ({ currentData, isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }
  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };
  console.log(currentData);
  const [id, setId] = useState(currentData.id);
  const [editedName, setEditedName] = useState(currentData.name);
  const [editedPhoneNumber, setEditedPhoneNumber] = useState(
    currentData.phoneNumber
  );

  const [updateUser] = useMutation(EDIT_USER, {
    variables: {
      id: id,
      name: editedName,
      phoneNumber: editedPhoneNumber,
    },
    refetchQueries: [{ query: GET_USER_DETAILS, variables: { id: id } }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("I am called");
    updateUser( id, editedName, editedPhoneNumber);
    onClose(); 
  };
  
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
              onSubmit={handleSubmit}
              className="w-full px-10 bg-white pt-5 pb-5 mb-4 md:w-full"
            >
              <h3 className="text-center text-black text-3xl md:text-3xl mb-7 font-semibold ">
                Edit profile
              </h3>
              <div className="mb-4 relative">
                <input
                  placeholder=" "
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  // {...register("name")}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-5 w-full text-md text-black border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-green peer"
                />
                <label className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-[#243C74] peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Name
                </label>
              </div>
              <div className="mb-4 relative">
                <input
                  placeholder=" "
                  value={editedPhoneNumber}
                  onChange={(e) => setEditedPhoneNumber(e.target.value)}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-5 w-full text-md text-black border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-green peer"
                />
                <label className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-[#243C74] peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  PhoneNumber
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
