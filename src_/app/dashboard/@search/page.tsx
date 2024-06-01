import Card from "@/app/components/card";

export default function Search() {
    return (
        <Card>
            <input
                type="text"
                className="w-full h-8 p-2 border border-gray-300 rounded"
                placeholder="Search..."
            />
        </Card>
    );
}
