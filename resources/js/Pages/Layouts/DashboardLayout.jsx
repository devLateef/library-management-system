import { FolderOpenIcon, UsersIcon, WalletIcon } from "@heroicons/react/24/solid";

import Dropdown from "../Dropdown";
import Navbar from "../Navbar";
import FlashMessage from "../FlashMessage";

export default function DashboardLayout({ children }) {
    const bookMenuItems = [
        {label: "Dashboard", href: "/dashboard"},
        { label: "Add New Book", href: "/books/create" },
        {
            label: "Categories",
            href: "#",
            children: [
                { label: "Fiction", href: "/books/categories/fiction" },
                { label: "Non-fiction", href: "/books/categories/non-fiction" },
            ],
        },
    ];

    const userMenuItems = [
        { label: "Add New User", href: "/users/create" },
        { label: "Get All Librarian", href: "/users/librarians" },
        { label: "All Users", href: "/users" },
        {
            label: "User Roles",
            href: "#",
            children: [
                { label: "Admins", href: "/users/roles/admin" },
                { label: "Subscribers", href: "/users/roles/subscriber" },
            ],
        },
    ];

    const transactionMenuItems = [
        { label: "All Borrowed Books", href: "/transactions" },
        { label: "Audit Transactions", href: "/borrowed/audit" },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-base-200">
            <div className="p-4">
                <Navbar />
            </div>

            <div className="flex flex-1">
                {/* Sidebar */}
                <div className="w-[300px] bg-primary text-white font-bold p-4 rounded-e-2xl space-y-4">
                <div className="flex items-start gap-2">
                <FolderOpenIcon className="size-4 text-amber-50 mt-1" />
                <Dropdown label="Book Management" items={bookMenuItems} />
                </div>
                <div className="flex items-start gap-2">
                <UsersIcon className="size-4 text-amber-50 mt-1" />
                <Dropdown label="User Management" items={userMenuItems} />
                </div>
                <div className="flex items-start gap-2">
                <WalletIcon className="size-4 text-amber-50 mt-1" />
                <Dropdown label="Transaction Management" items={transactionMenuItems} />
                </div>
                </div>

            {/* Main Content */}
                <div className="flex-1 overflow-y-auto p-4">
                    <FlashMessage />
                    {children}
                </div>
            </div>
        </div>
    );
}
