import React from "react";
import { useRouter } from "next/router";

function Yere() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      {router.query.person}'s {router.query.vehicle}
    </div>
  );
}

export default Yere;
