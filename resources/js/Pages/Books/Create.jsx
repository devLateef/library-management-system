import BookForm from "../BookForm";
import DashboardLayout from "../Layouts/DashboardLayout";

const Create = ({book, isEdit}) => {
    return (
        <DashboardLayout>
            <BookForm book={book} isEdit={isEdit}/>
        </DashboardLayout>
    );
};

export default Create;