import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20  relative ">
        <Image
          src="https://e0.pxfuel.com/wallpapers/554/381/desktop-wallpaper-one-piece-one-piece-dual-monitor.jpg"
          alt=""
          fill
          className="object-cover rounded-md"
        />
        <Image
          src="https://e0.pxfuel.com/wallpapers/374/900/desktop-wallpaper-zoro-wano-anime-one-piece-manga-thumbnail.jpg"
          alt=""
          width={48}
          height={48}
          className=" rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-white z-10"
        />
      </div>
      <div className=" h-20 flex flex-col  gap-2 items-center ">
        <span className=" font-semibold ">Roronoa Zoro</span>
        <div className="flex items-center gap-4  ">
          <div className="flex">
            <Image
              src="https://e0.pxfuel.com/wallpapers/374/900/desktop-wallpaper-zoro-wano-anime-one-piece-manga-thumbnail.jpg"
              alt=""
              width={12}
              height={12}
              className=" rounded-full w-3 h-3 "
            />
            <Image
              src="https://e0.pxfuel.com/wallpapers/374/900/desktop-wallpaper-zoro-wano-anime-one-piece-manga-thumbnail.jpg"
              alt=""
              width={12}
              height={12}
              className=" rounded-full w-3 h-3 "
            />
            <Image
              src="https://e0.pxfuel.com/wallpapers/374/900/desktop-wallpaper-zoro-wano-anime-one-piece-manga-thumbnail.jpg"
              alt=""
              width={12}
              height={12}
              className=" rounded-full w-3 h-3 "
            />
          </div>
          <span className=" text-xs text-gray-500"> 500 Followers</span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">My Profile</button>
      </div>
    </div>
  );
};

export default ProfileCard;
