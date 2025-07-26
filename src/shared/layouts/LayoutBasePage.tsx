import { Box, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import { IconMenu } from "@tabler/icons-react";
import { useDrawerContext } from "../contexts";

interface ILayoutBasePageProps {
    title: string;
    toolbar?: React.ReactNode;
    children: React.ReactNode;
}

export const LayoutBasePage = ({ children, title, toolbar }: ILayoutBasePageProps) => {
    const theme = useTheme();
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
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
                height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
                padding={1}
                display={'flex'}
                alignItems={'center'}
            >
                {smDown && (
                    <IconMenu onClick={toggleIsDrawerOpen} cursor={'pointer'} />
                )}
                <Typography
                    variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
                    overflow={'hidden'} //overflow={'hidden'}: esconde o texto se for é muito grande
                    whiteSpace={'nowrap'} //whiteSpace={'nowrap'}: não quebra linha quando o texto é muito grande
                    textOverflow={'ellipsis'} //textOverflow={'ellipsis'}: mostra "..." no final do texto se for muito grande
                >
                    {title}
                </Typography>
            </Box>
            {toolbar && (
                <Box>
                    {toolbar}
                </Box>
            )}
            <Box
                flex={1}
                overflow={'auto'} //overflow={'auto'}: permite que o children tenha scroll
            >
                {children}
            </Box>
        </Box>
    )
}