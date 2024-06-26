import type { Metadata } from 'next';
import './globals.css';
import ServiceContextProvider from '@/components/provider/ServiceContextProvider';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <ServiceContextProvider>{children}</ServiceContextProvider>
            </body>
        </html>
    );
}
