type ProductDetailsParams = {
    params: {
        productId: string
    }
}

export default function ProductDetails(params: ProductDetailsParams) {
    return <h1>Product {params.params.productId}</h1>
}
