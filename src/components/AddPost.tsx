import Image from "next/image";

const AddPost = () => {
  return (
    <div className=" p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
      {/* Avatar */}
      <Image
        src="https://e1.pxfuel.com/desktop-wallpaper/238/852/desktop-wallpaper-masque-luffy-smiling-luffy-smile.jpg"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 rounded-full object-cover"
      />
      {/* Post */}
      <div className="flex-1  ">
        {/* Text Input */}
        <div className=" flex gap-4">
          <textarea
            placeholder="What's On Your Mind !!"
            className="flex-1 bg-slate-100 rounded-lg p-2 "
            id=""
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        {/* Post Options */}
        <div className=" flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className=" flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="" width={20} height={20} />
            Photo
          </div>
          <div className=" flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>
          <div className=" flex items-center gap-2 cursor-pointer">
          <div className=" flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
            <Image src="/addevent.png" alt="" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
