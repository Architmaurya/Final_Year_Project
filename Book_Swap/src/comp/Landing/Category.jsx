import '../../App.css';
import { FaBook, FaFlask, FaHistory, FaUserTie, FaMountain, FaDragon } from "react-icons/fa";

function Category() {
  // Book categories data (each object includes icon, name, and description)
  const categories = [
    { icon: <FaBook />, name: 'Textbook', description: 'Academic textbooks for various subjects' },
    { icon: <FaFlask />, name: 'Science', description: 'Books on science and discovery' },
    { icon: <FaHistory />, name: 'History', description: 'Historical accounts and events' },
    { icon: <FaUserTie />, name: 'Biography', description: 'Biographies of famous personalities' },
    { icon: <FaMountain />, name: 'Adventure', description: 'Exciting adventure stories' },
    { icon: <FaDragon />, name: 'Fantasy', description: 'Fantasy worlds and epic tales' },
  ];

  // Function to chunk the categories into rows of 3
  const chunkedCategories = [];
  for (let i = 0; i < categories.length; i += 3) {
    chunkedCategories.push(categories.slice(i, i + 3));
  }

  return (
    <div className="container_Cate">
        <h1 className='text-center'>Books Categories</h1>
        <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloremque magni quod doloribus sit praesentium</p>
      {chunkedCategories.map((row, rowIndex) => (
        <div className="row mb-4" key={rowIndex}>
          {row.map((category, colIndex) => (
            <div className="col-md-4 text-center" key={colIndex}>
              <div className="category-card p-3 border rounded shadow-sm">
                <div className="category-icon mb-2">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Category;
