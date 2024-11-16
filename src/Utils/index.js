import toast from "react-hot-toast"
export const getBlogs = () =>{
    let blogs = []
    const storedBlogs = localStorage.getItem('blogs')
    if(storedBlogs) {
        blogs = JSON.parse(storedBlogs)
    }
    return blogs;
}

// Function  for save
export const saveBlogs = (blog) =>{
     let blogs = getBlogs();
    //  Checking is Exist
    const isExist = blogs.find(b => b.id === blog.id)
    if(isExist){
      return toast.error('Already Bookmarked')
    }
    blogs.push(blog)
    localStorage.setItem('blogs', JSON.stringify(blogs))
    toast.success('Bookmark saved')
}

// Function to Delete

export const deleteBlog = id =>{
    let blogs = getBlogs();
    const remaining = blogs.filter(b => b.id !== id) 
    localStorage.setItem('blogs', JSON.stringify(remaining))
    toast.success('Deleted Successfully')
}   