import { useForm } from "@inertiajs/react";
import FlashMessage from "./FlashMessage";


const BookForm = () => {

    const form = useForm({
        name: '',
        author: '',
        publisher: '',
        isbn: '',
        accession_no: '',
        call_no: '',
        category: ''
    })

    const submit = (e) => {
        e.preventDefault();
        form.post('/books/create');;
      };
    return(
        <div className="flex items-center justify-center min-h-screen bg-base-200 -mt-20">
            <div className="card bg-base-100 w-full max-w-4xl shadow-2xl">
            {/* {flash.message && (
                <div className="alert alert-success">{flash.message}</div>
            )}
            {flash.error && (
                <div className="alert alert-error">{flash.error}</div>
            )}
            {errors && Object.keys(errors).length > 0 && (
                <div className="alert alert-error">
                <ul className="list-disc pl-5">
                    {Object.entries(errors).map(([field, message]) => (
                    <li key={field}>{message}</li>
                    ))}
                </ul>
                </div>
            )} */}
                <FlashMessage />
                <div className="flex justify-between p-6">
                <h1 className="text-4xl font-medium">Register Book!</h1>
                </div>
                <div className="card-body">
                <form className="grid grid-cols-2 gap-6" onSubmit={submit}>
                    <div>
                        <label className="label">Book Name</label>
                        <input type="text" 
                        name="name" 
                        className="input w-full" 
                        placeholder="Enter book name"
                        value={form.data.name}
                        onChange={e => form.setData('name', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">Author</label>
                        <input type="text" 
                        name="author" 
                        className="input w-full" 
                        placeholder="Enter author's name" 
                        value={form.data.author}
                        onChange={e => form.setData('author', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">Publisher</label>
                        <input type="text" 
                        name="publisher" 
                        className="input w-full" 
                        placeholder="Enter publisher name" 
                        value={form.data.publisher}
                        onChange={e => form.setData('publisher', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">ISBN</label>
                        <input type="text" 
                        name="isbn" 
                        className="input w-full" 
                        placeholder="Enter book isbn" 
                        value={form.data.isbn}
                        onChange={e => form.setData('isbn', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">Accession Number</label>
                        <input type="text" 
                        name="accession_no" 
                        className="input w-full" 
                        placeholder="Enter accession number" 
                        value={form.data.accession_no}
                        onChange={e => form.setData('accession_no', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">Call Number</label>
                        <input type="text" 
                        name="call_no" 
                        className="input w-full" 
                        placeholder="Enter call number" 
                        value={form.data.call_no}
                        onChange={e => form.setData('call_no', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">Category</label>
                        <input type="text" 
                        name="category" 
                        className="input w-full" 
                        placeholder="Enter call number" 
                        value={form.data.category}
                        onChange={e => form.setData('category', e.target.value)}
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

export default BookForm;