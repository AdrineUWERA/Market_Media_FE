import { AiFillCloseCircle } from "react-icons/ai";
import {BsFillEmojiSmileFill} from "react-icons/bs"

const PopUp = ({ isVisible, onClose }) => {

    if (!isVisible) {
        return null;
    }
    const handleClose = (e) => {
        if (e.target.id === "wrapper") {
            onClose();
        }
    };

    return (
        <div
            id="wrapper"
            onClick={handleClose}
            className="fixed h-ful inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center max-h-full overflow-auto "
        >
            <div className=" w-[50%] ">
                <div className="bg-white p-2 rounded text-black flex flex-col text-start items-center">
                    <AiFillCloseCircle
                        size={30}
                        onClick={() => onClose()}
                        className="place-self-end cursor-pointer"
                    />
                    <div className="m-auto mb-7">
                        <p className="mb-6 mt-7">Application submitted successfully</p>
                        <BsFillEmojiSmileFill className="m-auto text-[40px] mb-7 text-[#243C74] "/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUp;