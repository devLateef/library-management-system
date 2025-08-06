import React from 'react';
import DashboardLayout from '../Layouts/DashboardLayout';
import { Link } from '@inertiajs/react';

const Profile = ({ auth }) => {
    const user = auth.user;
    return (
        <DashboardLayout>
            <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 rounded-lg mt-6 border border-gray-200">
                <div className='flex justify-between items-center mb-6 border-b pb-2'>
                    <h2 className="text-2xl font-bold text-gray-800">👤 Profile Details</h2>
                    <Link className='btn btn-secondary' href="/dashboard">Back</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            value={user.first_name || ''}
                            readOnly
                            className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 shadow-sm focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            value={user.last_name || ''}
                            readOnly
                            className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 shadow-sm focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="text"
                            value={user.phone || ''}
                            readOnly
                            className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 shadow-sm focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                        <input
                            type="date"
                            value={user.dob || ''}
                            readOnly
                            className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 shadow-sm focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Role</label>
                        <input
                            type="text"
                            value={user.role || ''}
                            readOnly
                            className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 shadow-sm focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={user.email || ''}
                            readOnly
                            className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 shadow-sm focus:outline-none"
                        />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Profile;
