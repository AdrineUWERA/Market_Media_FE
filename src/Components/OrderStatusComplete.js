import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { CHANGE_STATUS_INCOMPLETE } from "./../Mutations/order"
import { BsFillCheckCircleFill } from "react-icons/bs"
import { GET_ORDERS } from "./../Queries/Orders";

export default function OrderStatusComplete({ orderId }) {
    const router = useRouter();


    const [changeStatus] = useMutation(CHANGE_STATUS_INCOMPLETE, {
        variables: { id: orderId },
        onCompleted: () => router.push('/SellerDashboard/orders'),
        refetchQueries: [{ query: GET_ORDERS }],
    });

    return (
        <BsFillCheckCircleFill className="h-8 w-8 text-[#50C878] cursor-pointer" onClick={changeStatus}/>
    );
}