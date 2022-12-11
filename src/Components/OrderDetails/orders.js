import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { GET_ALL_ORDERS } from "../../Queries/OrdersCategoryQuery";
import Sidebar from "./sidebar";
import LoadingAnimation from "../UI/LoadingAni";
import { useQuery } from "@apollo/client";


const OrderPage = () => {
    const { loading, error, data } = useQuery(GET_ALL_ORDERS);
    if (loading) return <LoadingAnimation />;
    if (error) {
        console.log(error);
    }
    const Orders = data.orders;
    console.log(Orders);
    return (
        <>
        {!loading && !error && (
            <div className="flex flex-row px-3">
            <Sidebar/>
            <div className="flex flex-col px-32 py-20">
            <h1 className="text-4xl font-bold">
                My Orders
            </h1>
            {Orders.map((order) => (
            <div className="flex flex-row pt-10">
                <div className="mt-3 mr-4 border-blue-900 border-2 h-auto">
                    <Image src={order.product.image} width={200} height={100} />
                </div>
                <div className="mt-4 pl-20 justify-center">
                            <h1 className="text-1.9xl pb-3"><span className="font-bold">Product Name: </span>{order.product.name}</h1>
                            <p className="text-1.9xl pb-3">
                                <span className="font-bold">Seller Name: </span>
                                {order.business.name}
                            </p>
                            <p className="text-1.9xl pb-3">
                                <span className="font-bold">Price: </span>
                                {order.product.price}
                            </p>
                            <p className="text-1.9xl pb-3">
                                <span className="font-bold">Date: </span>
                                {order.orderDate}
                            </p>
                </div>  
                <div className="ml-40 pl-7 pt-10">
                    <Link href={`/orders/${order.id}`}>
                    <button type="button" className="bg-[#DBA61F] hover:bg-[#243C74] text-white font-bold py-2 px-4 rounded">Review</button>
                    </Link>
                </div> 
                </div>
            ))}
            </div> 
            
         </div>
        )}
        </>
    )
}

export default OrderPage;

