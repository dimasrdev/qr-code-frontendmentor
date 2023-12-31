import Image from "next/image";
import photo from "../../public/image-qr-code.png";

const Card = ({
  className,
  title,
  content,
}: {
  className: string;
  title: string;
  content: string;
}) => {
  return (
    <div
      className={`${className} p-5 flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]`}
    >
      <Image
        className="w-full h-auto rounded-xl"
        src={photo}
        alt="Image Description"
      />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="mt-1 text-gray-500 dark:text-gray-400">{content}</p>
        {/* <a
          className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          Go somewhere
        </a> */}
      </div>
    </div>
  );
};

export default Card;
