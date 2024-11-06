import Link from "next/link";

const countries = [
  { name: "Pakistan", slug: "pakistan" },
  { name: "Canada", slug: "canada" },
  { name: "France", slug: "france" },
  { name: "India", slug: "india" },
  { name: "Brazil", slug: "brazil" },
  { name: "Australia", slug: "australia" },
];

const CountryList = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 bg-black">
      <div className="flex justify-center items-center  bg-black text-white">
        <h1 className="text-5xl flex justify-center">
          <b>
            <i>
              <u>Countries</u>
            </i>
          </b>
        </h1>
        <br />
      </div>
      <div className="flex justify-center mt-5 bg-black text-white text-2xl ">
        <ul>
          {countries.map((country) => (
            <li key={country.slug}>
              <Link
                href={`/countries/${country.slug}`}
                className="hover:text-blue-600"
              >
                {country.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-black">
        <Link href={"/"}>
          <button className="flex justify-center items-center bg-slate-400 text-black border rounded-lg mt-10 mb-10 text-lg mr-96 ml-96 hover:text-blue-500 hover:bg-white">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CountryList;
