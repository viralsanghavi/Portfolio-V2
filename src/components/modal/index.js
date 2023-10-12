import Image from "next/image";
import Link from "next/link";

const Modal = ({open, onClose, navList}) => {
  if (!open) return <></>;
  return (
    <div className="h-screen absolute top-0 left-0 right-0 bottom-0 w-full bg-white overflow-x-hidden p-4">
      <div className="flex items-center justify-end">
        <Image
          src="/cross.svg"
          width={32}
          height={32}
          className="cursor-pointer"
          onClick={() => onClose(false)}
        />
      </div>
      <div className="flex items-center justify-center flex-col capitalize cursor-pointer text-3xl h-full font-semibold gap-12 ">
        {navList.map((nav) => (
          <Link
            href={`/#${nav}`}
            key={nav}
            onClick={() => onClose(false)}
            className="hover:text-high"
          >
            {nav}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Modal;
