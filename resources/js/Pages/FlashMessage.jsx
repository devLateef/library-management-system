import { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";

const FlashMessage = () => {
    const { flash } = usePage().props;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (flash.message || flash.error) {
            setVisible(true);
            const timeout = setTimeout(() => {
                setVisible(false);
            }, 3000); // hide after 3s
            return () => clearTimeout(timeout); // cleanup on unmount
        }
    }, [flash.message, flash.error]);

    if (!visible || (!flash.message && !flash.error)) return null;

    return (
        <div className="my-4">
            {flash.message && (
                <div className="alert alert-success text-white">
                    {flash.message}
                </div>
            )}
            {flash.error && (
                <div className="alert alert-error text-white">
                    {flash.error}
                </div>
            )}
        </div>
    );
};

export default FlashMessage;
