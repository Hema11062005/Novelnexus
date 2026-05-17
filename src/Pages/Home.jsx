// pages/Home.jsx
import { books } from "../Data";
import BookCard from "../Components/Bookcard";

function Home() {
    return (
    <div className="p-6 grid md:grid-cols-3 gap-4">
        {books.map(book => (
        <BookCard key={book.id} book={book} />
        ))}
    </div>
    );
}

export default Home;