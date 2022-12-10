import { AiFillCloseCircle } from "react-icons/ai"

const ApplicationModal = ({isVisible, onClose, children}) => {
    if(!isVisible){
        return null;
    }
    const handleClose = (e) => {
        if(e.target.id ==="wrapper"){
            onClose();
        }
    }
  return (
    <div
      id="wrapper"
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-start max-h-full overflow-auto "
    >
      <div className="w-[70%] h-[90%] ">
        <div className="bg-white p-2 rounded text-black flex flex-col text-start">
          <AiFillCloseCircle
            size={30}
            onClick={() => onClose()}
            className="place-self-end cursor-pointer"
          />
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;
