import Link from "next/link";

import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Browse all movies now" />
      </Head>

      <div className="w-screen h-screen flex justify-center items-center bg-[#0C0C0C]">
        <Link
          className="bg-[#893B00] p-3 rounded-xl text-white text-2xl"
          href={"/movie"}
        >
          Watch All Movise
        </Link>
      </div>
    </>
  );
}
