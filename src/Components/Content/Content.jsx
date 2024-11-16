import errorImage from "../../assets/404.jpg";
import { useLoaderData } from "react-router-dom";
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
import Loader from "../Loader/Loader";

const Content = () => {
  const blog = useLoaderData();
  const { url, title, tags, published_at, body_html, cover_image, description } = blog;
  console.log(blog);
  return (
    <div className="max-w-3xl mx-auto group  ">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={cover_image || errorImage}
      />
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400 dark:border-gray-600">
        {tags.map((tag) => (
          <a
            key={tag}
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline  "
          >
            #{tag}
          </a>
        ))}
      </div>
      <div className=" space-y-2">
        <a href={url} target="_blank" className="text-2xl font-semibold ">{title}</a>
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
       
    </div>
  );
};

export default Content;
