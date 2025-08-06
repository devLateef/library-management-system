import BooksTable from "../BooksTable"
import DashboardLayout from "../Layouts/DashboardLayout"
import Pagination from "../Pagination";

const AllBooks = ({books, auth})=>{
    return(
        <DashboardLayout>
            <BooksTable books={books.data} user={auth.user}/>
            <Pagination books={books}/>
        </DashboardLayout>
    )
}

export default AllBooks;