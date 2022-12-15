import { AiFillCloseCircle } from "react-icons/ai";
import { BiShowAlt, BiHide } from "react-icons/bi";
import bcrypt from "bcryptjs";
import { useState, useContext } from "react";
import { ChangePasswordContext } from "../../Context/EditPasswordContext";

const EditProfileModal = ({
  loggedInUser,
  currentHashedPassword,
  isVisible,
  onClose,
}) => {
  const { changeUserPassword } = useContext(ChangePasswordContext);

  const [errorShown, setErrorShown] = useState(false);
  const [errorShown1, setErrorShown1] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  const [newPasswordShown, setNewPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };
  const toggleNewPassword = (e) => {
    e.preventDefault();
    setNewPasswordShown(!newPasswordShown);
  };
  const toggleConfirmPassword = (e) => {
    e.preventDefault();
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  if (!isVisible) {
    return null;
  }
  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
      setNewPassword("");
      setConfirmPassword("");
      setCurrentPassword("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorShown(true);
      console.log("passwords don't match");
    }

    const isEqual = await bcrypt.compare(
      currentPassword,
      currentHashedPassword
    );

    if (!isEqual) {
      console.log("passwords incorrect");
      setErrorShown1(true);
    }

    if (newPassword === confirmPassword && isEqual) {
      changeUserPassword(loggedInUser, newPassword);
      onClose();
      setNewPassword("");
      setConfirmPassword("");
      setCurrentPassword("");
    }
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
                Change Password
              </h3>
              {errorShown && (
                <div className="bg-[#fdc0c0] border-2 border-[red] w-full flex justify-center py-2 rounded-md mb-3">
                  <p>Passwords don't match</p>
                </div>
              )}
              {errorShown1 && (
                <div className="bg-[#fdc0c0] border-2 border-[red] w-full flex justify-center py-2 rounded-md mb-4">
                  <p>Current password is incorrect</p>
                </div>
              )}
              <div className="mb-4 relative">
                <input
                  placeholder=" "
                  required
                  value={currentPassword}
                  type={passwordShown ? "text" : "password"}
                  onChange={(e) => {
                    setCurrentPassword(e.target.value);
                    setErrorShown(false);
                    setErrorShown1(false);
                  }}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-5 w-full text-md text-black border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-green peer"
                />
                <label className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-[#243C74] peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Current Password
                </label>
                <button
                  onClick={togglePassword}
                  className="absolute h-[40px] inset-y-0 z-0 right-4 top-2 flex items-center text-sm"
                >
                  {passwordShown ? <BiShowAlt /> : <BiHide />}
                </button>
              </div>
              <div className="mb-4 relative">
                <input
                  placeholder=" "
                  required
                  type={newPasswordShown ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    setErrorShown(false);
                    setErrorShown1(false);
                  }}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-5 w-full text-md text-black border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-green peer"
                />
                <label className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-[#243C74] peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  New Password
                </label>
                <button
                  onClick={toggleNewPassword}
                  className="absolute h-[40px] inset-y-0 z-0 right-4 top-2 flex items-center text-sm"
                >
                  {newPasswordShown ? <BiShowAlt /> : <BiHide />}
                </button>
              </div>

              <div className="mb-4 relative">
                <input
                  placeholder=" "
                  required
                  type={confirmPasswordShown ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setErrorShown(false);
                    setErrorShown1(false);
                  }}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-5 w-full text-md text-black border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-green peer"
                />
                <label className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-[#243C74] peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Confirm New Password
                </label>
                <button
                  onClick={toggleConfirmPassword}
                  className="absolute h-[40px] inset-y-0 z-0 right-4 top-2 flex items-center text-sm"
                >
                  {confirmPasswordShown ? <BiShowAlt /> : <BiHide />}
                </button>
              </div>

              <button className="bg-[#243C74] focus:shadow-outline focus:outline-none hover:bg-[#2b4583] mt-10 text-white font-bold px-6 md:text-lg rounded-md w-full mb-3 py-2">
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
