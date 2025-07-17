import { createContext, useCallback, useContext, useState } from "react";

interface IDrawerContext {
    isDrawerOpen: boolean,
    toggleIsDrawerOpen: () => void
}

interface IAppDrawerProviderProps {
    children: React.ReactNode
}

export const DrawerContext = createContext({} as IDrawerContext);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

export const AppDrawerProvider = ({ children }: IAppDrawerProviderProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleIsDrawerOpen = useCallback(() => {
        setIsDrawerOpen(odlIsDrawerOpen => !odlIsDrawerOpen);
    }, []);

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleIsDrawerOpen }}>
            {children}
        </DrawerContext.Provider>
    )
}