import Image from "next/image";
import Link from "next/link";

const UserMediaCard = ({ userId }: { userId?: string }) => {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className=" text-gray-500"> User Media</span>
        <Link href="/" className=" text-blue-500 text-xs">
          See All
        </Link>
      </div>
      {/* POST */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://e0.pxfuel.com/wallpapers/506/733/desktop-wallpaper-lufi-thumbnail.jpg"
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://e0.pxfuel.com/wallpapers/374/900/desktop-wallpaper-zoro-wano-anime-one-piece-manga-thumbnail.jpg"
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://e1.pxfuel.com/desktop-wallpaper/46/844/desktop-wallpaper-sanji-vinsmoke-vinsmoke-sanji-thumbnail.jpg"
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://e0.pxfuel.com/wallpapers/623/108/desktop-wallpaper-poster-print-ideas-in-2021-topi-jerami-bajak-laut-gambar-anime-ussop-bounty-thumbnail.jpg"
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://e1.pxfuel.com/desktop-wallpaper/686/330/desktop-wallpaper-nico-robin-one-piece-nico-robin-wano-thumbnail.jpg"
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://e1.pxfuel.com/desktop-wallpaper/705/381/desktop-wallpaper-tony-chopper-for-android-android-tony-chopper-thumbnail.jpg"
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://e1.pxfuel.com/desktop-wallpaper/394/377/desktop-wallpaper-nami-one-piece-nami-aesthetic-thumbnail.jpg"
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://e0.pxfuel.com/wallpapers/203/199/desktop-wallpaper-one-piece-wanted-poster-brook-brooks-one-piece-one-piece-manga-one-piece-iphone-usopp-bounty-thumbnail.jpg"
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMediaCard;
