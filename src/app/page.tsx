import Link from 'next/link';
import { products as MockProducts } from '../data/products'

export default function RootPage() {
    const products = MockProducts;

    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                {products.map((product) => (
                    <Link
                        href={`/products/${product.id}`}
                        key={product.id}
                        className="bg-white rounded-lg p-4 shadow">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 object-cover rounded-lg" />
                        <h2 className="text-xl font-bold">{product.name}</h2>
                        <p className="text-gray-600">${product.price}</p>
                    </Link>
                ))}
            </div>
        </>
    );
}
