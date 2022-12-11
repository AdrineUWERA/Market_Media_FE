import OrderPage from "../../src/Components/OrderDetails/orders";
import Navbar from "../../src/Components/UI/Navbar";
import Footer from "../../src/Components/UI/Footer";
import { useRouter } from "next/router";

import { useQuery } from "@apollo/client";
import LoadingAnimation from "../../src/Components/UI/LoadingAni";

const OrderDetails = () => {
    return(
        <div>
            <Navbar/>
            <OrderPage/>
            <Footer/>
        </div>

    )
}

export default OrderDetails;