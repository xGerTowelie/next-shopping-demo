import Link from "next/link";
import Card from "@/app/components/card";

export default function Archive() {
    return (
        <Card>
            <h1>Archive</h1>
            <Link href="/dashboard">go back</Link>
        </Card>
    );
}
