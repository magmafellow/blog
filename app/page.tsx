import Link from "next/link";
import Post from "@/app/ui/Post";

export default function Page() {
  const arr3 = [1, 2, 3];

  return (
    <>
      {/* header */}
      <div className="container m-auto">
        <header className="pt-11">
          <nav className="flex justify-between">
            <a href="/">Logo</a>
            <ul className="flex justify-end gap-20">
              <li>
                <a href="#">Main</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      {/* Main section */}
      <main>
        <div className="container xl:border-x border-neutral-600 m-auto min-h-72">
          {/* wrapper for posts */}
          <ul className="text-center">{
            arr3.map((_i, i) => <li key={i}><Post /></li>)
          }</ul>
        </div>
      </main>
    </>
  );
}
