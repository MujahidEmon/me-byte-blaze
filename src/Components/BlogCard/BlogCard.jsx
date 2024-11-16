/* eslint-disable react/prop-types */
import { Link, useNavigation } from "react-router-dom";
import errorImage from '../../assets/404.jpg'
import { MdDelete } from "react-icons/md";
import { deleteBlog } from "../../Utils";
import { HashLoader } from "react-spinners";
import Loader from "../Loader/Loader";


const BlogCard = ({blog, deletable, handleDelete}) => {
    const{id, title, published_at, cover_image, description} = blog
    const navigation = useNavigation();
    
    if(navigation.state === 'loading') return <Loader></Loader>
    return (
        <div className="flex relative ">
          <Link
            to={`/blog/${id}`}
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hover:scale-105 border-2 border-primary hover:border-secondary border-opacity-40 rounded-xl p-4"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={cover_image || errorImage}
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                {blog.title}
              </h3>
              <span className="text-xs dark:text-gray-600">
                {new Date (published_at).toLocaleDateString()}
              </span>
              <p>
                {description}
              </p>
            </div>
          </Link>
          {deletable &&
          <div className="absolute bg-secondary -top-5 -right-5 border-white border-4 rounded-full hover:scale-105 p-3">
            <MdDelete onClick={() => handleDelete(id)} size={20}></MdDelete>
          </div>}
        </div>
    );
};

export default BlogCard;