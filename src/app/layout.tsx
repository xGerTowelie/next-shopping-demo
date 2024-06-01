import Link from 'next/link';
import '../styles/globals.css';

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout(props: RootLayoutProps) {
    return (
        <html>
            <body>
                <div
                    id="nav"
                    className="bg-gray-800 text-white p-4 flex">
                    <div id="nav-links" className="flex gap-4 text-xl">
                        <Link href="/">Home</Link>
                        <Link href="/categories">Categories</Link>
                    </div>
                    <div id="spacer" className="grow"></div>
                    <div id="nav-actions">
                        <div className="w-10 h-10  px-2 py-2 rounded-full bg-white">

                            <Link href="cart">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                                    alt="Cart"
                                    className="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div id="content" className="p-4">
                    {props.children}
                </div>
            </body>
        </html>
    );
}

