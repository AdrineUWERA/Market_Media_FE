import { useMutation } from "@apollo/client"; 
import { REJECT_APPLICATION } from "../../../src/Mutations/SellerApplicationMutation";
import { GET_ALL_APPLICATIONS} from "../../../src/Queries/SellersApplicationQuery";

const RejectApplicationButton = ({ businessId }) => {
  const [updateBusiness] = useMutation(REJECT_APPLICATION, {
    variables: { id: businessId },
    // onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_ALL_APPLICATIONS }],
  });

  return (
    <div className="d-flex ms-auto">
      <button type="button" onClick={updateBusiness} class="btn bg-[#DB1F1F] sm:w-[250px] md:w-[300px] py-3 rounded-md text-white font-semibold text-[18px]">Reject</button>
    </div>
  );
};

export default RejectApplicationButton;
