import BlogDetailsCard from "@/components/ui/BlogDetailsCard";
import { Blog } from "@/types";

// Static generation for dynamic routes
export const generateStaticParams = async () => {
  const res = await fetch(`http://localhost:5000/blogs`);
  const blogs: Blog[] = await res.json();

  return blogs.slice(0, 3).map((blog) => ({
    blogId: blog.id,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;

  const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog = await res.json();
  return {
    title: blog.title,
    description: blog.description
  };
}

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const res = await fetch(`http://localhost:5000/blogs/${blogId}`, {
    next: { revalidate: 60 },
  });

  const blog: Blog = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
