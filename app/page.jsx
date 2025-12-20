import Link from "next/link";

const HomePage = () => {
    return (
        <div>
            <h1 className="text-2xl">Welcome to Property Pulse</h1>
            <Link href="/properties">Go to Properties</Link>
        </div>
    );
}

export default HomePage;