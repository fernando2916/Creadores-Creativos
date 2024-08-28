import { useEffect } from "react";
import { Header } from "./Header";
import { FeaturedPosts } from "./FeaturedPosts";
import { Posts } from "./Posts";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <Header /> */}
      <main>
        <FeaturedPosts />
        <Posts/>
      </main>
    </>
  );
};

export default Blog;
