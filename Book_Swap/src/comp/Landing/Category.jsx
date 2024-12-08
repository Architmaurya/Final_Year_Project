import '../../App.css';
import { FaBook, FaLightbulb, FaUserGraduate, FaRocket, FaMountain, FaDragon } from 'react-icons/fa';

function Category() {
  const categories = [
    { icon: <FaBook />, name: 'Novel', description: 'Immerse yourself in captivating stories' },
    { icon: <FaLightbulb />, name: 'Self-help', description: 'Books to empower and motivate' },
    { icon: <FaRocket />, name: 'Motivational', description: 'Get inspired to achieve your goals' },
    { icon: <FaUserGraduate />, name: 'Academics', description: 'Essential books for learning and growth' },
    { icon: <FaMountain />, name: 'Adventure', description: 'Thrilling tales of excitement' },
    { icon: <FaDragon />, name: 'Fantasy', description: 'Explore magical and mythical worlds' },
  ];

  const chunkedCategories = [];
  for (let i = 0; i < categories.length; i += 3) {
    chunkedCategories.push(categories.slice(i, i + 3));
  }

  return (
    <div className="container_Cate my-5">
      <h1 className="text-center text-primary">Book Categories</h1>
      <p className="text-center mb-5 text-secondary">
        Explore our diverse collection of books across multiple genres.
      </p>
      {chunkedCategories.map((row, rowIndex) => (
        <div className="row mb-4" key={rowIndex}>
          {row.map((category, colIndex) => (
            <div className="col-md-4" key={colIndex}>
              <div className="category-card text-center p-4 rounded shadow-lg">
                <div className="category-icon mb-3">{category.icon}</div>
                <h3 className="text-dark">{category.name}</h3>
                <p className="text-muted">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Category;