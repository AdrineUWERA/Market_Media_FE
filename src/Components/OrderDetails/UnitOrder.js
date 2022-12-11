import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import GET_ORDERS from "../../Queries/OrdersQuery";
import Sidebar from "./sidebar";
import LoadingAnimation from "../UI/LoadingAni";
import { useQuery } from "@apollo/client";


const OrderPage = () => {
    const router = useRouter();
    const id = router.query.id;
    console.log("id", id);
    const { loading, error, data } = useQuery(GET_ORDERS, {
        variables: { id },
    });
    if (loading) return <LoadingAnimation />;
    if (error) {
        console.log(error);
    }
    console.log(data);
    const OrderDetails = data.order;
    console.log(OrderDetails);
   
    return (
        <>
        {!loading && !error && (
        // <div className="flex flex-col py-30">
            <div className="flex flex-row px-3">
            <Sidebar/>
            <div className="flex flex-col px-32 py-20">
            <h1 className="text-4xl font-bold">
                My Orders
            </h1>
            <div className="flex flex-row pt-10">
                <div className="mt-3 mr-4 border-blue-900 border-2 h-auto">
                    <Image src={OrderDetails.product.image} width={200} height={100} />
                </div>
                <div className="mt-4 pl-20 justify-center">
                    <h1 className="text-1.9xl pb-3"><span className="font-bold">Product Name: </span>{OrderDetails.product.name}</h1>
                    <p className="text-1.9xl pb-3">
                        <span className="font-bold">Seller Name: </span>
                        {OrderDetails.business.name}
                    </p>
                    <p className="text-1.9xl pb-3">
                        <span className="font-bold">Price: </span>
                        {OrderDetails.product.price}
                    </p>
                    <p className="text-1.9xl pb-3">
                        <span className="font-bold">Date: </span>
                        {OrderDetails.orderDate}
                    </p>
                    <p className="text-1.9xl pb-3">
                        <span className="font-bold">Shipping Method: </span>
                        {OrderDetails.shippingMethod}
                    </p>
                </div>  
                </div>
            </div> 
            
         </div>
        
        )}
        </>
    )
}


export default OrderPage;


