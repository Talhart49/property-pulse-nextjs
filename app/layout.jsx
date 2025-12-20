import '@/assets/styles/global.css';
import Footer from '@/components/Footer';
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
                    <Footer />
                </main>
            </body>
        </html>
    );
}

export default MainLayout;