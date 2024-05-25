import { useEffect } from "react";
import { HeaderPost } from "./components/HeaderPost";
import { ContentPost } from "./components/ContentPost";
import { Comments } from "./components/Comments";
import { ComentPost } from "./components/ComentPost";

export const InfoPost = () => {
     useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <HeaderPost />
      <ContentPost />
      <ComentPost/>
      <Comments/>
    </main>
  );
}
