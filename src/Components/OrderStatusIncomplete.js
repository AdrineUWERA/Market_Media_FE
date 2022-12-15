import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { CHANGE_STATUS_COMPLETE } from "./../Mutations/order"
import { RiCloseCircleFill } from "react-icons/ri"
import { GET_ORDERS } from "./../Queries/Orders";

export default function OrderStatusIncomplete({ orderId }) {
    const router = useRouter();


    const [changeStatus] = useMutation(CHANGE_STATUS_COMPLETE, {
        variables: { id: orderId },
        onCompleted: () => router.push('/SellerDashboard/orders'),
        refetchQueries: [{ query: GET_ORDERS }],
    });

    return (
        <RiCloseCircleFill className="h-9 w-9 text-[#ED2939] cursor-pointer" onClick={changeStatus}/>
    );
}