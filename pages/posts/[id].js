// import React from "react";
// import { useRouter } from "next/router";

// function Yere() {
//   const router = useRouter();
//   console.log(router);
//   return (
//     <div>
//       {router.query.person}'s {router.query.vehicle}
//     </div>
//   );
// // }

// export default Yere;

import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
function Yere({ post }) {
  const router = useRouter();
  const [owners, setOwners] = useState(post);
  useEffect(() => {
    async function loadData() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      );
      const req = await res.json();
      setOwners(req);
    }
    if (post.length == 0) {
      loadData();
    }
  }, []);
  // laoding belum bisa

  // if (!post[0]) {
  //   return <h1>loading</h1>;
  // }

  // const router = useRouter();
  // console.log(router);
  return <div>{owners.body}</div>;
}
Yere.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return { post: [] };
  }

  // jadi apapun yang di return dari sini
  // akan masuk kedalam component diatas sebagai props
  // const query = ctx.query
  // query sama dengan nama file yang kita buat di situ [id]
  const { query } = ctx;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${query.id}`
  );
  const posts = await res.json();
  return { post: posts };
};

export default Yere;
