import '@/assets/styles/global.css';

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
                    {children}
                </main>
            </body>
        </html>
    );
}

export default MainLayout;