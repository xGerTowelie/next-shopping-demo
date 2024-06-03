export default async function Categories() {
    const categories = await fetch('http://localhost:3000/api/categories').then((res) => res.json());
    console.log(categories);

    return (
        <div className="grid grid-cols-4 gap-4">
            {categories.map((category: any) => (
                <div className="border p-4 rounded"
                    key={category.id}>
                    <h1 className="text-2xl">{category.name}</h1>
                    <p className="text-sm py-2">{category.description}</p>
                </div>
            ))}
        </div>
    );
}
