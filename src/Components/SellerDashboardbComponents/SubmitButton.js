import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../../Mutations/product";
// import { GET_ALL_APPLICATIONS} from "../../../src/Queries/SellersApplicationQuery";

const SubmitButton = ({
  image,
  name,
  description,
  categoryId,
  unit,
  quantity,
  price,
  manufacturer,
  dateAdded,
}) => {
  const handleClickButton = () => {

    
    addProduct(
      image,
      name,
      description,
      categoryId,
      unit,
      quantity,
      price,
      manufacturer,
      dateAdded
    );
  };
  const [addProduct] = useMutation(ACCEPT_APPLICATION, {
    variables: {
      image,
      name,
      description,
      categoryId,
      unit,
      quantity,
      price,
      manufacturer,
      dateAdded,
    },
    // onCompleted: () => navigate('/'),
    // refetchQueries: [{ query: GET_ALL_APPLICATIONS }],
  });

  return (
    <div className="d-flex ms-auto">
      <button
        type="button"
        onClick={handleClickButton}
        class="btn bg-[#243C74]  sm:w-[250px] md:w-[300px] py-3 rounded-md text-white font-semibold text-[18px]"
      >
        Approve
      </button>
    </div>
  );
};

export default SubmitButton;
