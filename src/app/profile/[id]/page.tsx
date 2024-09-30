import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className=" flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className=" w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src="https://e0.pxfuel.com/wallpapers/554/381/desktop-wallpaper-one-piece-one-piece-dual-monitor.jpg"
                alt=""
                fill
                className="object-cover rounded-md"
              />
              <Image
                src="https://e0.pxfuel.com/wallpapers/374/900/desktop-wallpaper-zoro-wano-anime-one-piece-manga-thumbnail.jpg"
                alt=""
                width={128}
                height={128}
                className=" w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover" 
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">Roronoa Zoro</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">23</span>
                <span className="font-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">6.9K</span>
                <span className="font-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">13</span>
                <span className="font-sm">Followings</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test" />
      </div>
    </div>
  );
};

export default ProfilePage;
