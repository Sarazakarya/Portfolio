import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className=" w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  ">
      <Image
        className=" rounded-full w-full h-full object-cover"
        width={300}
        height={300}
        alt="image"
        src="/Profile.jfif"
      />
    </div>
  );
};

export default Profile;
