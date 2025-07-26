import { Avatar, Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { useDrawerContext, useThemeContext } from "../../contexts";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { IconMoon, IconSun } from "@tabler/icons-react";

interface IMenuLateralProps {
    children: React.ReactNode;
}
interface IListItemLinkProps {
    to: string;
    icon: any;
    label: string;
    onClick: (() => void) | undefined;
}

export const ListItemLink = ({ to, icon, label, onClick }: IListItemLinkProps) => {
    const navigate = useNavigate();
    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false })

    const handleClick = () => {
        navigate(to);
        onClick?.();
    }

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
}

export const MenuLateral = ({ children }: IMenuLateralProps) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const { isDrawerOpen, toggleIsDrawerOpen, drawerOptions } = useDrawerContext();
    const { toggleTheme, themeName } = useThemeContext();

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
                            {drawerOptions.map((drawer) => (
                                <ListItemLink
                                    key={drawer.label}
                                    to={drawer.to}
                                    icon={drawer.icon}
                                    label={drawer.label}
                                    onClick={toggleIsDrawerOpen}
                                />
                            ))}
                        </List>
                    </Box>
                    <Box>
                        <List component={'nav'}>
                            <ListItemButton onClick={toggleTheme}>
                                <ListItemIcon>
                                    {themeName === 'light' ? (
                                        <IconMoon/>                                    
                                    ) : (
                                        <IconSun/>
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={'Alterar tema'} />
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