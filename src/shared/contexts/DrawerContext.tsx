import { createContext, useCallback, useContext, useState } from "react";

interface IDrawerContextProps {
    isDrawerOpen: boolean,
    drawerOptions: IDrawerOptionsProps[],
    setDrawerOptions: (newDrawerOptions: IDrawerOptionsProps[]) => void,
    toggleIsDrawerOpen: () => void
}
interface IDrawerOptionsProps {
    to: string,
    icon: any,
    label: string
}
interface IAppDrawerProviderProps {
    children: React.ReactNode
}

export const DrawerContext = createContext({} as IDrawerContextProps);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

export const AppDrawerProvider = ({ children }: IAppDrawerProviderProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOptionsProps[]>([]);

    const toggleIsDrawerOpen = useCallback(() => {
        setIsDrawerOpen(odlIsDrawerOpen => !odlIsDrawerOpen);
    }, []);

    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOptionsProps[]) => {
        setDrawerOptions(newDrawerOptions);
    }, []);

    return (
        <DrawerContext.Provider
            value={{ isDrawerOpen, toggleIsDrawerOpen, drawerOptions, setDrawerOptions: handleSetDrawerOptions }}
        >
            {children}
        </DrawerContext.Provider>
    )
}