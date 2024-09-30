import Image from "next/image";
import Link from "next/link";

const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className=" text-gray-500"> Birthdays</span>
      </div>
      <div className=" flex items-center justify-between ">
        <div className=" flex items-center gap-4">
          <Image
            src="https://e1.pxfuel.com/desktop-wallpaper/777/741/desktop-wallpaper-shanks-one-piece-luffy-and-shanks-thumbnail.jpg"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span>Akagami No Shanks</span>
        </div>
        <div className=" flex gap-3">
          <button className=" bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
            {" "}
            Celebrate
          </button>
        </div>
      </div>
      {/* UPCOMING  */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4 ">
      <Image
            src="/gift.png"
            alt=""
            width={24}
            height={24}
          />
          <Link href="/" className="flex flex-col gap-1 text-sm">
          <span className=" text-gray-700 font-semibold">Upcoming Birthdays</span>
          <span className=" text-gray-500">See Other 16 Have Upcoming Birthdays</span>
          </Link>
      </div>
    </div>
  );
};

export default Birthdays;
