import React from "react";
import Image from "next/image";
import HearderItem from "./HearderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HearderItem title="HOME" Icon={HomeIcon} />
        <HearderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HearderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HearderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HearderItem title="SEARCH" Icon={SearchIcon} />
        <HearderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain "
        src="https://links.papareact.com/ua6"
        alt=""
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
