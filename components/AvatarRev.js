//next image
import Image from "next/image";

const AvatarRev = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/avatar5.png"}
        width={736}
        height={678}
        alt=""
        className="translate-z-0 -z-1 w-full h-full"
        draggable="false"
      ></Image>
    </div>
  );
};

export default AvatarRev;
