import Container from "@mui/material/Container";
import { FC, ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <Container maxWidth="lg">
            {children}
        </Container>
    )
}