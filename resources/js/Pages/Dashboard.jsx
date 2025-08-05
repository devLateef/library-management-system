import { FolderOpenIcon, UsersIcon, WalletIcon } from "@heroicons/react/24/solid";
import Dropdown from "./Dropdown";
import Navbar from "./Navbar/";
import BookForm from "./Books/Create";

const Dashboard = () => {
    const bookMenuItems = [
        { label: "Add New Book", href: "/books/create" },
        { label: "All Book", href: "/books" },
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
        { label: "Add Librarian", href: "/users/create" },
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
    ]

    const transactionMenuItems = [
        { label: "All Borrowed Books", href: "/borrowed" },
        { label: "Audit Transactions", href: "/borrowed/audit" },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-base-200">
            {/* Navbar */}
            <div className="p-4">
                <Navbar />
            </div>

            {/* Main layout */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <div className="w-1/4 bg-primary text-white font-bold p-4 rounded-e-2xl space-y-4">
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

                {/* Main Content Area */}
                <div className="w-3/4  overflow-y-auto">
                    <BookForm/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
