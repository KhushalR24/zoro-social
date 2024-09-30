import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className=" flex flex-col gap-4 ">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 ">
          <Image
            src="https://e1.pxfuel.com/desktop-wallpaper/957/480/desktop-wallpaper-kid-luffy-monkey-d-luffy-one-piece-luffy-pfp-thumbnail.jpg"
            alt=""
            className=" w-10 h-10 rounded-full"
            width={48}
            height={48}
          />
          <span className="font-medium">Monkey D Luffy</span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://e1.pxfuel.com/desktop-wallpaper/345/817/desktop-wallpaper-these-luffy-and-zoro-one-piece-mobile-are-ideal-anime-ps4-luffy.jpg"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
          nostrum porro molestiae beatae sunt consequuntur et quibusdam
          repellendus! Tempora alias voluptatibus necessitatibus nihil
          cupiditate dolor iusto eligendi ea possimus eius maxime aliquam, sequi
          quo ducimus!
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4 ">
        <div className="flex gap-8 ">
          <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-2 ">
            <Image
              src="/like.png"
              alt=""
              width={16}
              height={16}
              className=" cursor-pointer"
            />
            <span className=" text-gray-300">|</span>
            <span className=" text-gray-500">123 <span className="hidden md:inline">Likes</span></span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-2 ">
            <Image
              src="/comment.png"
              alt=""
              width={16}
              height={16}
              className=" cursor-pointer"
            />
            <span className=" text-gray-300">|</span>
            <span className=" text-gray-500">123 <span className="hidden md:inline">Comments</span></span>
          </div>
        </div>
        <div className="">
        <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-2 ">
            <Image
              src="/share.png"
              alt=""
              width={16}
              height={16}
              className=" cursor-pointer"
            />
            <span className=" text-gray-300">|</span>
            <span className=" text-gray-500">123 <span className="hidden md:inline">Shares</span></span>
          </div>
        </div>
      </div>
      <Comments/>
    </div>
  );
};

export default Post;
