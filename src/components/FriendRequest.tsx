import Image from "next/image";
import Link from "next/link";

const FriendRequest = () => {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className=" text-gray-500"> Friend Requests</span>
        <Link href="/" className=" text-blue-500 text-xs">
          See All
        </Link>
      </div>

      {/* User  */}
      <div className=" flex items-center justify-between ">
        <div className=" flex items-center gap-4">
          <Image
            src="https://e0.pxfuel.com/wallpapers/481/24/desktop-wallpaper-nico-robin-for-android-robin-one-piece-thumbnail.jpg"
            alt=""
            width={20}
            height={20}
            className="w-10 h-10 rounded-full"
          />
          <span>Nico Robin</span>
        </div>
        <div className=" flex gap-3">
        <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className=" cursor-pointer"
          />
        <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* User  */}
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
        <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className=" cursor-pointer"
          />
        <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* User  */}
      <div className=" flex items-center justify-between ">
        <div className=" flex items-center gap-4">
          <Image
            src="https://e1.pxfuel.com/desktop-wallpaper/802/689/desktop-wallpaper-sanji-aesthetics-sanji-aesthetic-thumbnail.jpg"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span>Vinsmoke Sanji</span>
        </div>
        <div className=" flex gap-3">
        <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className=" cursor-pointer"
          />
        <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
