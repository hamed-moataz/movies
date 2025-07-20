import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center  h-screen w-screen bg-sky-900 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4 text-red-600 ">404 - Page Not Found</h1>
      <Link href='/movie' className="p-2 outline-none border border-white rounded text-white" >back to home</Link>
    </div>
  );
}
