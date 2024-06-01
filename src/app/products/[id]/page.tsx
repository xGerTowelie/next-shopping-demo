import { products as MockProducts } from '../../../data/products';
type ProductDetailsProps = {
    params: {
        id: string;
    };
}
export default function ProductDetails(props: ProductDetailsProps) {
    const product = MockProducts.find((product) => product.id.toString() === props.params.id);

    return (
        <>
            <h1 className="text-3xl font-bold">{product?.name}</h1>
            <p className="text-gray-600 my-2">{product?.description}</p>
            <p>${product?.price}</p>
            <img
                src={product?.image}
                alt={product?.name}
                className="w-1/2 object-cover rounded-lg" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">Add to cart</button>

        </>
    );
}

