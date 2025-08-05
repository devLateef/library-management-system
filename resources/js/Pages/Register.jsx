import { Link, useForm } from "@inertiajs/react";
import FlashMessage from "./FlashMessage";

const Register = () => {

    const form = useForm({
        first_name: '',
        last_name: '',
        matric_no: '',
        level: '',
        phone: '',
        dob: '',
        department: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    const submit = (e) => {
        e.preventDefault();
        form.post('/register');;
      };
    return(
        <div className="flex items-center justify-center min-h-screen bg-base-200">
            <div className="card bg-base-100 w-full max-w-4xl shadow-2xl">
                <FlashMessage/>
                <div className="flex justify-between p-6">
                <h1 className="text-4xl font-medium">Register now!</h1>
                <Link className="btn btn-primary" href="/">home</Link>
                </div>
                <div className="card-body">
                <form className="grid grid-cols-2 gap-6" onSubmit={submit}>
                    <div>
                        <label className="label">First Name</label>
                        <input type="text" 
                        name="first_name" 
                        className="input w-full" 
                        placeholder="Enter your first name"
                        value={form.data.first_name}
                        onChange={e => form.setData('first_name', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">Last Name</label>
                        <input type="text" 
                        name="last_name" 
                        className="input w-full" 
                        placeholder="Enter your last name" 
                        value={form.data.last_name}
                        onChange={e => form.setData('last_name', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">Matric Number</label>
                        <input type="text" 
                        name="matric_no" 
                        className="input w-full" 
                        placeholder="Enter your matric number" 
                        value={form.data.matric_no}
                        onChange={e => form.setData('matric_no', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">Level</label>
                        <select
                        className="input w-full"
                        name="level"
                        value={form.data.level}
                        onChange={e => form.setData('level', e.target.value)}
                        >
                            <option value="">Select Level</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400">400</option>
                            <option value="500">500</option>
                            <option value="FNG">FNG</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">Date of Birth</label>
                        <input type="date" 
                        name="department" 
                        className="input w-full" 
                        placeholder="Enter your department" 
                        value={form.data.dob}
                        onChange={e => form.setData('dob', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">Phone Number</label>
                        <input type="number" 
                        name="department" 
                        className="input w-full" 
                        placeholder="Enter your department" 
                        value={form.data.phone}
                        onChange={e => form.setData('phone', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">Department</label>
                        <input type="text" 
                        name="department" 
                        className="input w-full" 
                        placeholder="Enter your department" 
                        value={form.data.department}
                        onChange={e => form.setData('department', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">Email</label>
                        <input type="email" 
                        name="email" 
                        className="input w-full" 
                        placeholder="Email" 
                        value={form.data.email}
                        onChange={e => form.setData('email', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">Password</label>
                        <input type="password" 
                        name="password" 
                        className="input w-full" 
                        placeholder="Password"
                        value={form.data.password}
                        onChange={e => form.setData('password', e.target.value)} 
                        />
                    </div>
                    <div>
                        <label className="label">Confirm Password</label>
                        <input type="password" 
                        name="confirm_password" 
                        className="input w-full" 
                        placeholder="Confirm Password"
                        value={form.data.confirm_password}
                        onChange={e => form.setData('confirm_password', e.target.value)} 
                        />
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

export default Register;