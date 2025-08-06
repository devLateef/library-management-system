import { Link } from "@inertiajs/react";

const Pagination = ({ books }) => {
    return (
        <div className="flex justify-between items-center p-4 text-sm text-gray-600">
            {/* Showing x to y of z */}
            <div>
                Showing {(books.from || 0)} to {(books.to || 0)} of {books.total} results
            </div>

            {/* Pagination Buttons */}
            <div className="flex space-x-2">
                {books.links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url || ""}
                        className={`
                            px-3 py-1 rounded border border-gray-300 
                            ${link.active ? "bg-gray-300 font-bold" : "hover:bg-gray-100"} 
                            ${!link.url ? "text-gray-400 cursor-not-allowed" : "text-gray-700"}
                        `}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Pagination;