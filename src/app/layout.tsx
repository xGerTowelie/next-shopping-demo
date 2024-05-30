import Link from "next/link"
import "../styles/globals.css"

type RootLayoutProps = {
    children: React.ReactNode
}
type Route = {
    path: string
    name: string
}
export default function RootLayout(props: RootLayoutProps) {
    const routes: Route[] = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/dashboard",
            name: "Dashboard"
        },
        {
            path: "/team",
            name: "Team"
        }
    ]

    return (
        <html>
            <body>
                <div className="flex gap-4 bg-gray-500 p-4 text-white">
                    {routes.map((route) => (
                        <Link
                            key={route.path}
                            href={route.path}
                            className="decoration-none hover:text-blue-500">
                            {route.name}
                        </Link>
                    ))}

                </div>
                <div className="p-4">
                    {props.children}
                </div>
            </body>
        </html>
    );
}
