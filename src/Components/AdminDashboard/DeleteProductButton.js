import { useMutation } from "@apollo/client"; 
import { DELETE_PRODUCT } from "../../../src/Mutations/ProductMutation";
import { GET_ALL_PRODUCTS} from "../../../src/Queries/ProductQueries";

const DeleteProductButton = ({ productId }) => {
  const [deleteProduct] = useMutation(DELETE_PRODUCT, {
    variables: { id: productId },
    // onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_ALL_PRODUCTS }],
  });

  return (
    <div className="d-flex ms-auto">
      <button
        type="button"
        onClick={deleteProduct} 
        className="group-hover:pb-[0.3rem] block bg-white w-full py-[0.375rem] px-[0.5rem] text-[12px] text-left hover:bg-[#BBB]"
      >
        Remove
      </button>
    </div>
  );
};

export default DeleteProductButton;
