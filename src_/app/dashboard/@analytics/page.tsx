import Card from "@/app/components/card";
import Link from "next/link";

export default function Analytics() {
    return (
        <Card>
            <h1>analytics</h1>
            <Link href="/dashboard/archive">go to archive</Link>
        </Card>
    );
}
