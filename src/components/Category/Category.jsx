import PropTypes from "prop-types";
const Category = ({category}) => {
    const {category_name, logo, availability} = category;
    return (
        <div className="my-10">
            <div className="p-10 bg-indigo-50 rounded-lg w-80 lg:w-auto mx-auto">
                <img className="p-4 bg-indigo-100 rounded-lg" src={logo} alt="" />
                <h4 className="text-xl mt-8 font-extrabold">{category_name}</h4>
                <p className="mt-2 font-medium text-gray-400">{availability}</p>
            </div>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object
}
export default Category;