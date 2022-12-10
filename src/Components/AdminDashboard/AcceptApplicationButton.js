import { useMutation } from "@apollo/client"; 
import { ACCEPT_APPLICATION } from "../../../src/Mutations/SellerApplicationMutation";
import { GET_ALL_APPLICATIONS} from "../../../src/Queries/SellersApplicationQuery";

const AcceptApplicationButton = ({ businessId }) => {
  const [updateBusiness] = useMutation(ACCEPT_APPLICATION, {
    variables: { id: businessId  },
    // onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_ALL_APPLICATIONS }],
  });

  return (
    <div className="d-flex ms-auto">
      <button type="button" onClick={updateBusiness} class="btn bg-[#243C74]  sm:w-[250px] md:w-[300px] py-3 rounded-md text-white font-semibold text-[18px]">Approve</button>
    </div>
  );
};

export default AcceptApplicationButton;
