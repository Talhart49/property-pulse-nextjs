import '@/assets/styles/global.css';
import Navbar from '@/components/Navbar';

export const metadata = {
    title: 'Property Pulse',
    description: 'Real Estate Listing Platform',
    keywords: 'real estate, property listings, homes for sale, apartments, houses',
};

const MainLayout = ({ children }) => {
    return (
        <html>
            <body>
                <main>
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    );
}

export default MainLayout;