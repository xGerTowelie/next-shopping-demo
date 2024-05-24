type Product = {
    id: string
    name: string
    description: string
    price: number
}
export default function Products() {
    const products: Product[] = [
        {
            id: "1",
            name: "Product 1",
            description: "Description 1",
            price: 1
        },
        {
            id: "2",
            name: "Product 2",
            description: "Description 2",
            price: 2
        },
        {
            id: "3",
            name: "Product 3",
            description: "Description 3",
            price: 3
        }
    ]

    return (
        <div>
            <h1 className="text-3xl font-bold py-4">Products</h1>
            <ul>
                {products.map((product) => (
                    <a key={product.id}
                        className="flex flex-col gap-2 p-4 border-gray-300 rounded shadow"
                        href={`/products/${product.id}`}
                    >
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </a>
                ))}
            </ul>
        </div>
    )
}
