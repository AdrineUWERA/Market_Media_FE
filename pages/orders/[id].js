import Sidebar from "../../src/Components/OrderDetails/sidebar";
import Navbar from "../../src/Components/UI/Navbar";
import Footer from "../../src/Components/UI/Footer";
import { useRouter } from "next/router";
import OrderPage from "../../src/Components/OrderDetails/UnitOrder";
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