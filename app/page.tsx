import Post from "@/app/ui/post";
import { getAllPosts } from "./lib/data";

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <>
      <ul className="text-center">
        {posts.map((post, index) => (
          <li key={index}>
            <Post postObj={post} isMinimized={true} />
          </li>
        ))}
      </ul>
    </>
  );
}
