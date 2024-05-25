import { useEffect } from "react";
import { ComentsItemPost } from "./components/ComentsItemPost";
import { ContentItemPost } from "./components/ContentItemPost";
import { HeaderItemPost } from "./components/HeaderItemPost";
import { RecomendItemPost } from "./components/RecomendItemPost";

export const InfoProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main>
      <HeaderItemPost />
      <ContentItemPost />
      <ComentsItemPost />
      <RecomendItemPost/>
    </main>
  );
}
