import StyledComponentsRegistry from './registry';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
