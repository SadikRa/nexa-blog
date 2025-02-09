"use server";

import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createBlog = async (data: FormData) => {
  const blogData = Object.fromEntries(data.entries());

  const res = await fetch("http://localhost:5000/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
  });

  const blogInfo = await res.json();
  if (blogInfo) {
    redirect(`/blogs/${blogInfo.id}`);
  }
  return blogInfo;
};
