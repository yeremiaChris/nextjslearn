// import Link from "next/link";

// const people = [
//   { v: "cars", name: "jere" },
//   { v: "motor", name: "aku" },
//   { v: "train", name: "saya" },
// ];

// function Details() {
//   return (
//     <div>
//       {people.map((e) => (
//         <Link as={`/${e.v}/${e.name}`} href="/[vehicle]/[person]">
//           <a>
//             navigage to {e.name}'s {e.v},{""}
//           </a>
//         </Link>
//       ))}
//     </div>
//   );
// }

// export default Details;
// // arti dari tanda kurung itu routenya bisa berubah

import Link from "next/link";
import { useState, useEffect } from "react";

export default function List({ posts }) {
  // const [owners, setOwners] = useState([]);
  // useEffect(() => {
  //   async function loadData() {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/post");
  //     const req = await res.json();
  //     setOwners(req);
  //   }

  //   loadData();
  // }, []);
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href="/posts/[id]" as={`/posts/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}

List.getInitialProps = async () => {
  // jadi apapun yang di return dari sini
  // akan masuk kedalam component diatas sebagai props
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return { posts: posts };
};

// arti dari tanda kurung itu routenya bisa berubah
