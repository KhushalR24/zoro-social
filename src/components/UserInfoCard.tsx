import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userId }: { userId?: string }) => {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className=" text-gray-500"> User Information</span>
        <Link href="/" className=" text-blue-500 text-xs">
          See All
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className=" text-xl text-black ">Roronoa Zoro</span>
          <span className=" text-sm ">@ZoroJuro</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet
          exercitationem alias, cumque repudiandae sed explicabo quaerat ex
          autem impedit sunt doloremque commodi corporis voluptatem perspiciatis
          labore esse beatae. Repellendus quia id labore quam iusto?
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Living In <b>Wano</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            Went To <b>Mihawk Training School</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            Going In <b>StrawHat Crew</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link href="https://khushal-rakholiya.vercel.app/" className=" text-blue-500 font-medium ">
              Khushal Rakholiya
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>Joined September 2024 </span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">Follow</button>
        <span className="text-red-400 self-end text-xs cursor-pointer ">Block user</span>
      </div>
    </div>
  );
};

export default UserInfoCard;
