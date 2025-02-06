import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import { Blog } from "@/types";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 30,
    },
  });
  const blogs: Blog[] = await res.json();

  return (
    <div className="my-10">
      <LatestBlogs blogs={blogs} />
    </div>
  );
};

export default HomePage;
