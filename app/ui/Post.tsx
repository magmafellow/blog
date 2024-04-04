import { Post, User } from "@/app/lib/defenitions";
import Link from "next/link";
import { minimize } from "@/app/lib/utils";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Post({
  postObj,
  isMinimized,
}: {
  postObj: Post;
  isMinimized: boolean;
}) {
  return (
    <div className="max-w-[550px] inline-block mb-10 border-b-stone-400 border-b-2 pb-2">
      {/* time */}
      <div className="text-end text-neutral-500">10:37</div>
      <h3 className="text-xl font-bold">{postObj.title}</h3>
      <p className="antialiased text-neutral-700 tracking-wide">
        {isMinimized
          ? minimize(postObj.text_content, 150, true)
          : postObj.text_content}
      </p>
      {isMinimized && (
        <div className="text-end pr-5">
          <Link href={`/post/${postObj.id}`} className="inline-block">
            <FaArrowAltCircleRight className="text-3xl transition hover:text-sky-700" />
          </Link>
        </div>
      )}
    </div>
  );
}
