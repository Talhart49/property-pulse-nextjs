import properties from "@/properties";
import PropertyCard from "./PropertyCard";
import Link from "next/link";

const HomeProperties = () => {

    const recentProperties = properties.slice(0, 3)

    return (
        <>
            <section className='px-4 py-6'>
                <div className="text-3xl font-bold mb-6 text-blue-600 text-center">
                    Recent Properties
                </div>
                <div className='container-xl lg:container m-auto py-6'>
                    {
                        recentProperties.length === 0 ? (
                            <p>No properties available.</p>
                        ) : (
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-6' >
                                {recentProperties.map((property) => (
                                    <PropertyCard key={property.id} property={property} />
                                ))}
                            </div>
                        )}
                </div>

            </section>

            <section className="m-auto max-w-lg my-6 px-6">
                <Link href='/properties' className="block bg-black text-white text-center px-6 py-4 rounded-xl hover:bg-gray-700">
                    View All Properties
                </Link>

            </section>
        </>
    );
}

export default HomeProperties;