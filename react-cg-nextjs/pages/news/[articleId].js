import { useRouter } from "next/router";

const Article = () => {
  const router = useRouter();

  return (
    <>
      <h1>Hello from {router.query.articleId}</h1>
      <button onClick={() => router.back()}>&larr;&nbsp;Back</button>
    </>
  );
};

export default Article;
