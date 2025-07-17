import { Avatar, Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import { IconHome } from "@tabler/icons-react";
import { useDrawerContext } from "../../contexts";

interface IMenuLateralProps {
    children: React.ReactNode;
}

export const MenuLateral = ({ children }: IMenuLateralProps) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const { isDrawerOpen, toggleIsDrawerOpen } = useDrawerContext();

    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? "temporary" : "permanent"} onClose={toggleIsDrawerOpen}>
                <Box width={theme.spacing(28)} height={'100%'} display={'flex'} flexDirection={'column'}>
                    <Box
                        width={'100%'}
                        height={theme.spacing(20)}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Avatar
                            sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                            src="https://avatars.githubusercontent.com/u/85528842?v=4"
                        />
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component={'nav'}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <IconHome />
                                </ListItemIcon>
                                <ListItemText primary='Página inicial' />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box sx={{ height: '100vh', marginLeft: smDown ? 0 : theme.spacing(28) }}>
                {children}
            </Box>
        </>
    );
}