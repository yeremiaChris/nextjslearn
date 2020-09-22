import Link from "next/link";

const people = [
  { v: "cars", name: "jere" },
  { v: "motor", name: "aku" },
  { v: "train", name: "saya" },
];

function Details() {
  return (
    <div>
      {people.map((e) => (
        <Link as={`/${e.v}/${e.name}`} href="/[vehicle]/[person]">
          <a>
            navigage to {e.name}'s {e.v},{""}
          </a>
        </Link>
      ))}
    </div>
  );
}

export default Details;
// arti dari tanda kurung itu routenya bisa berubah
