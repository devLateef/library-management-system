import React from 'react';
import DashboardLayout from '../Layouts/DashboardLayout';
import { Link, useForm } from '@inertiajs/react';

const EditProfile = ({ auth }) => {
    const user = auth.user;
    const { data, setData, put, errors, processing } = useForm({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        phone: user.phone || '',
        dob: user.dob || '',
        role: user.role || '',
        email: user.email || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put('/profile/update'); // Adjust this route based on your backend
    };

    return (
        <DashboardLayout>
            <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 rounded-lg mt-6 border border-gray-200">
                <div className='flex justify-between items-center mb-6 border-b pb-2'>
                    <h2 className="text-2xl font-bold text-gray-800">👤 Edit Profile</h2>
                    <Link className='btn btn-secondary' href="/dashboard">Back</Link>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { label: 'First Name', name: 'first_name', type: 'text' },
                        { label: 'Last Name', name: 'last_name', type: 'text' },
                        { label: 'Phone', name: 'phone', type: 'text' },
                        { label: 'Date of Birth', name: 'dob', type: 'date' },
                        { label: 'Role', name: 'role', type: 'text', disabled: true },
                        { label: 'Email', name: 'email', type: 'email' },
                    ].map(({ label, name, type, disabled = false }) => (
                        <div key={name}>
                            <label className="block text-sm font-medium text-gray-700">{label}</label>
                            <input
                                type={type}
                                value={data[name]}
                                disabled={disabled}
                                onChange={(e) => setData(name, e.target.value)}
                                className={`mt-1 w-full rounded-md border ${
                                    errors[name] ? 'border-red-500' : 'border-gray-300'
                                } bg-white px-4 py-2 text-gray-800 shadow-sm focus:outline-none`}
                            />
                            {errors[name] && (
                                <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
                            )}
                        </div>
                    ))}

                    <div className="col-span-full flex justify-end mt-4">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition"
                        >
                            {processing ? 'Updating...' : 'Update Profile'}
                        </button>
                    </div>
                </form>
            </div>
        </DashboardLayout>
    );
};

export default EditProfile;
