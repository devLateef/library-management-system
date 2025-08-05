import { Link, useForm } from "@inertiajs/react";
import FlashMessage from "./FlashMessage";

const Login = () => {
    const form = useForm({
        email: '',
        password: ''
    });

    const submit = (e) => {
        e.preventDefault();
        form.post('/login');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <FlashMessage />

                <div className="flex justify-between mr-8 mt-4 items-center">
                    <h1 className="text-4xl font-medium px-4 py-2">Login now!</h1>
                    <Link className="btn btn-primary" href="/">home</Link>
                </div>

                <div className="card-body">
                    <form onSubmit={submit}>
                        <fieldset className="fieldset space-y-2">
                            <label className="label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input input-bordered w-full"
                                placeholder="Email"
                                value={form.data.email}
                                onChange={e => form.setData('email', e.target.value)}
                            />
                            {form.errors.email && (
                                <div className="text-red-500 text-sm">{form.errors.email}</div>
                            )}

                            <label className="label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="input input-bordered w-full"
                                placeholder="Password"
                                value={form.data.password}
                                onChange={e => form.setData('password', e.target.value)}
                            />
                            {form.errors.password && (
                                <div className="text-red-500 text-sm">{form.errors.password}</div>
                            )}

                            <div>
                                <Link className="link link-hover text-sm">Forgot password?</Link>
                            </div>

                            <button type="submit" className="btn btn-primary mt-4" disabled={form.processing}>
                                {form.processing ? 'Logging in...' : 'Login'}
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;