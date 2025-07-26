import { Box, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import { IconMenu } from "@tabler/icons-react";
import { useDrawerContext } from "../contexts";

interface ILayoutBasePageProps {
    title: string;
    children: React.ReactNode;
}

export const LayoutBasePage = ({ children, title }: ILayoutBasePageProps) => {
    const theme = useTheme();
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const { toggleIsDrawerOpen } = useDrawerContext();

    return (
        <Box
            gap={1}
            height={'100%'}
            display={'flex'}
            flexDirection={'column'}
        >
            <Box
                gap={1}
                height={theme.spacing(12)}
                padding={1}
                display={'flex'}
                alignItems={'center'}
            >
                {smDown && (
                    <IconMenu onClick={toggleIsDrawerOpen} cursor={'pointer'} />
                )}
                <Typography variant="h5">
                    {title}
                </Typography>
            </Box>
            <Box>
                Barra de ferramentas
            </Box>
            <Box>
                {children}
            </Box>
        </Box>
    )
}