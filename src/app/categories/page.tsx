import { products as MockProducts } from '../../data/products';

export default function Categories() {
    const categoriesSet = new Set(MockProducts.map((product) => product.category));

    return (
        <div className="grid grid-cols-4 gap-4">
            {Array.from(categoriesSet).map((category) => (
                <div
                    key={category}
                    className="bg-white rounded-lg p-4 shadow">
                    <h2 className="text-xl font-bold">{category}</h2>
                </div>
            ))}
        </div>
    );
}
