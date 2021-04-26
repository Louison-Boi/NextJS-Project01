import { useRouter } from "next/router";

const BlogPostsPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div className="BlogPostsPage">
      <h1>The Blog Posts Pages</h1>
    </div>
  );
};

export default BlogPostsPage;
