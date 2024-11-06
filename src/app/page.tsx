import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <h1 className="text-4xl  text-yellow-400">Hello Friend,</h1>
      <p className="text-2xl text-yellow-300">
        For seeing the data of countries ! Click the button below
      </p>
      <Link href={"/countries"}>
        <button className="items-center bg-white text-black border rounded-lg hover:text-white hover:bg-blue-500">
          Click Here
        </button>
      </Link>
    </div>
  );
}
