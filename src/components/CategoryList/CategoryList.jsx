import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    },[])
    return (
        <div className="my-10">
            <div className="text-center">
                <h2 className="text-5xl font-extrabold mb-5">Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-xl">
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;