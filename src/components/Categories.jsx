import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
function Categories() {

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        await axios
          .get("https://fakestoreapi.com/products/categories")
          .then((response) => {
            setCategories(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);
  return (
    <aside className="p-2">
      <h3 className="mb-5">Select By Category</h3>
      {categories.map((category,i) => (
        <Form.Check
          type="switch"
          id="custom-switch"
          label={`${category.charAt(0).toUpperCase()}${category.slice(1)}`}
          className="mb-2"
          key={i}
        />
      ))}
    </aside>
  );
}

export default Categories;
