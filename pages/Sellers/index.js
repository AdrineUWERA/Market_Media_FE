// import ProductInCategory from "../../src/Components/CategoryProducts/ProductInCategory";
import Sellers from "../../src/Components/SellerDetails/Sellers";
import SellerDetails from "./[id]";
import Navbar from "../../src/Components/UI/Navbar";
import Footer from "../../src/Components/UI/Footer";

const CategoryProductsList = () => {
    return ( <div>
        <Navbar/>
        {/* <ProductInCategory/> */}
        <Sellers/>
        <Footer/>
    </div> );
}
 
export default CategoryProductsList;