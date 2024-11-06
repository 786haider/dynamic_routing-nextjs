import Link from "next/link";
import Image from "next/image";

const countries: any = {
  pakistan: {
    capital: "Islamabad",
    population: "251,269,164 million",
    flag: "/flags/pakistan.png",
  },
  canada: {
    capital: "Ottawa",
    population: "38 million",
    flag: "/flags/canada.png",
  },
  france: {
    capital: "Paris",
    population: "67 million",
    flag: "/flags/france.png",
  },
  india: {
    capital: "New Delhi",
    population: "1.4 billion",
    flag: "/flags/india.png",
  },
  brazil: {
    capital: "Brasília",
    population: "213 million",
    flag: "/flags/brazil.png",
  },
  australia: {
    capital: "Canberra",
    population: "26 million",
    flag: "/flags/australia.png",
  },
};

const Countries = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const country = countries[slug];

  return (
    <div className="flex flex-col items-center mt-10 bg-black text-white text-5xl">
      <Link href="/countries">
        <button className="bg-slate-400 text-black border rounded-lg mt-10 mb-10 text-lg hover:text-blue-500 hover:bg-white">
          Go Back
        </button>
      </Link>
      <Image
        src={country.flag}
        alt={`Flag of ${slug.charAt(0).toUpperCase() + slug.slice(1)}`}
        width={100}
        height={100}
        className="mb-4 w-32 h-auto"
      />
      <h1>{slug.charAt(0).toUpperCase() + slug.slice(1)}</h1>
      <br />
      <p>Capital: {country.capital}</p>
      <br />
      <p>Population: {country.population}</p>
    </div>
  );
};
export default Countries;
