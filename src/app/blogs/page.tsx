import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexaBlog | Blogs",
  description: "Explore the latest blogs on NexaBlog about technology, science, and more.",
};

const BlogPage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 30,
    },
  });

  const blogs: Blog[] = await res.json();

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl text-center my-5 font-bold">
        Explore all blogs <span className="text-teal-600">NexaBlog</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where we unlock
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
