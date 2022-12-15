import { DELETE_PRODUCT } from "./../Mutations/product"
import { GET_BUSINESS_PRODUCTS } from "./../Queries/businessProducts";
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

export default function DeleteProductButton({ productId }) {
    const router = useRouter();


    const [deleteProduct] = useMutation(DELETE_PRODUCT, {
        variables: { id: productId },
        onCompleted: () => router.push('/SellerDashboard/stock'),
        refetchQueries: [{ query: GET_BUSINESS_PRODUCTS }],
    });

    return (
        <button type="button" className="group-hover:pb-[0.3rem] block bg-white w-full py-[0.375rem] py-[0.375rem] px-[0.5rem] text-[12px] text-left hover:bg-[#BBB]"
            onClick={deleteProduct}>
            Remove
        </button>
    );
}