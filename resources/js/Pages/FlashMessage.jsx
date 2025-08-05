import { usePage } from '@inertiajs/react';

const FlashMessage = () => {
    const { flash, errors } = usePage().props;

    const hasErrors = errors && Object.keys(errors).length > 0;

    if (!flash.message && !flash.error && !hasErrors) return null;

    return (
        <div className="my-4 space-y-2">
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
            {hasErrors && (
                <div className="alert alert-error">
                    <ul className="list-disc pl-5">
                        {Object.values(errors).map((fieldErrors, i) =>
                            fieldErrors.map((msg, j) => (
                                <li key={`${i}-${j}`}>{msg}</li>
                            ))
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FlashMessage;