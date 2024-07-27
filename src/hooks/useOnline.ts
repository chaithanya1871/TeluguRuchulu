import { useEffect, useState } from "react";

export const useOnline = (): boolean => {
    const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

    const updateOnlineStatus = () => {
        setIsOnline(navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener("online", updateOnlineStatus);
        window.addEventListener("offline", updateOnlineStatus);
        return () => {
            window.removeEventListener("online", updateOnlineStatus);
            window.removeEventListener("offline", updateOnlineStatus);
        };
    }, []);

    return isOnline;
};
