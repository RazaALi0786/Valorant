import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="grid h-screen px-4 bg-black place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 font-valorant text-9xl">404</h1>

        <p className="text-2xl tracking-tight text-gray-900 font-valorant sm:text-4xl">
          Uh-oh!
        </p>

        <p className="pb-4 mt-4 text-red-500 md:pb-8 font-valorant md:text-lg lg:text-2xl">
          Try searching again, or return home to start from the beginning.
        </p>

        <Link
          to={"/"}
          className="  font-mono font-bold transform -translate-x-1/2 top-[13.25rem] bg-[#ff4655] p-1 cursor-pointer aboslute left-1/2 hover:bg-[#111111] border-b-4 border-red-800 hover:border-red-500 rounded text-white md:px-4 md:py-3 md:text-2xl md:mt-56"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
