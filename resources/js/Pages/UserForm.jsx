import { useForm } from "@inertiajs/react";
import FlashMessage from "./FlashMessage";


const UserForm = () => {

    const form = useForm({
        first_name: '',
        last_name: '',
        phone: '',
        dob: '',
        email: '',
        role: ''
    })

    const submit = (e) => {
        e.preventDefault();
        form.post('/users/create');;
      };
    return(
        <div className="flex items-center justify-center min-h-screen bg-base-200 -mt-20">
            <div className="card bg-base-100 w-full max-w-4xl shadow-2xl">
                <FlashMessage />
                <div className="flex justify-between p-6">
                <h1 className="text-4xl font-medium">Register New Librarian!</h1>
                </div>
                <div className="card-body">
                <form className="grid grid-cols-2 gap-6" onSubmit={submit}>
                    <div>
                        <label className="label">First Name</label>
                        <input type="text" 
                        name="name" 
                        className="input w-full" 
                        placeholder="Enter book name"
                        value={form.data.first_name}
                        onChange={e => form.setData('first_name', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">Last Name</label>
                        <input type="text" 
                        name="author" 
                        className="input w-full" 
                        placeholder="Enter author's name" 
                        value={form.data.last_name}
                        onChange={e => form.setData('last_name', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">Phone Number</label>
                        <input type="number" 
                        name="publisher" 
                        className="input w-full" 
                        placeholder="Enter publisher name" 
                        value={form.data.phone}
                        onChange={e => form.setData('phone', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">Date of Birth</label>
                        <input type="date" 
                        name="isbn" 
                        className="input w-full" 
                        placeholder="Enter book isbn" 
                        value={form.data.dob}
                        onChange={e => form.setData('dob', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">Email</label>
                        <input type="email" 
                        name="accession_no" 
                        className="input w-full" 
                        placeholder="Enter accession number" 
                        value={form.data.email}
                        onChange={e => form.setData('email', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">Role</label>
                        <select className="input w-full"
                        name="role" value={form.data.role}
                        onChange={e => form.setData('role', e.target.value)}
                        >
                            <option value="">Select Role</option>
                            <option value="Librarian">Librarian</option>
                            <option value="User">A User</option>
                        </select>
                    </div>
                    <div className="col-span-2 flex justify-center">
                        <button type="submit" className="btn btn-primary w-3/4 mt-4">Register</button>
                    </div>
                </form>
                </div>
            </div>
        </div>

    )
}

export default UserForm;