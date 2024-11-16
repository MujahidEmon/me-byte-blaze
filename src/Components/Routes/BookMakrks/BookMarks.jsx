import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../../../Utils";
import BlogCard from "../../BlogCard/BlogCard";
import { Link } from "react-router-dom";
import EmptyState from "../../EmpltyState/EmptyState";


const BookMarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs )
    },[])

    const handleDelete = id => {
        deleteBlog(id)
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs )  
    }
    if(blogs.length<1) return <EmptyState message={'No Bookmarks Available'}></EmptyState>
    return (
        <div className=" grid justify-center my-9 max-w-7xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-4">
            {
                blogs.map((blog,idx) => <BlogCard handleDelete={handleDelete} deletable={true} key={idx} blog={blog}></BlogCard>)
            }
          
        </div>
    );
};

export default BookMarks;