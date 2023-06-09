import React, { useEffect, useState } from "react";
import Page from "./Page";
import Header from "../components/Header";
import EditIcon from "../icons/EditIcon";
import { Link } from "react-router-dom";
import MenuIcon from "../icons/MenuIcon";
import Card from "../components/Card";
import { CardType } from "../types";
import Like from "../icons/Like";
import TrackLikeIcon from "../icons/TrackLikeIcon";
import TrackMoreIcon from "../icons/TrackMoreIcon";
import TrackArrowIcon from "../icons/TrackPauseIcon";
import TrackPauseIcon from "../icons/TrackPauseIcon";
import TrackPlayIcon from "../icons/TrackPlayIcon";
import AudioWaveIcon from "../icons/AudioWaveIcon";

type Props = {};

function User({}: Props) {
  return (
    <Page>
      <Header />

      <div className="-mt-[64px]">
        <Profile />

        <div className="flex px-[32px] py-[24px]">
          <button className="mr-[24px]">
            <MenuIcon />
          </button>
        </div>

        <TopArtists />
        <TopTracks />
        <PublicPlaylist />

        <Following />
      </div>
    </Page>
  );
}

const Profile = () => {
  return (
    <div className="min-h-[340px] flex items-end px-8 pb-6 bg-black-2">
      {/* photo */}
      <div className="w-[232px] min-w-[232px] h-[232px] mr-6">
        <div className="relative w-full h-full rounded-full bg-black-1 shadow-lg">
          <div className="w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="profile-photo"
              className="w-full h-full object-center object-cover rounded-full"
            />
          </div>
          <div className="absolute inset-0">
            <button className="w-full h-full rounded-full flex flex-col items-center justify-center gap-2 bg-black  opacity-0 hover:opacity-80">
              <div>
                <EditIcon />
              </div>
              <div>Choose photo</div>
            </button>
          </div>
        </div>
      </div>
      {/* info */}
      <div className="flex flex-col">
        <span> Profile </span>
        <div className="mt-2">
          <button className="w-full">
            <h1 className="text-[96px] font-bold text-start line-clamp-3 mb-4"> Aman Ghanghoriy</h1>
          </button>
        </div>
        <div className="text-sm mt-2">
          <span> 17 Public Playlists </span>
          <span className="inline-block mx-1"> •</span>
          <span>
            <Link to={""}> 7 Following </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

const TopArtists = () => {
  return (
    <section className="px-[32px]">
      <header className="flex justify-between mb-4">
        <div className="grow">
          <h2 className="text-2xl leading-normal">
            <Link to={""} className="hover:underline">
              {" "}
              Top artists this month{" "}
            </Link>
          </h2>
          <p className="text-sm text-gray"> Only visible to you </p>
        </div>
        <Link to={""} className="block text-sm leading-normal text-gray ml-2 hover:underline">
          <span className=""> Show all </span>
        </Link>
      </header>
      <div className="grid grid-cols-6 gap-6">
        <Card type={CardType.Artist} data={{ name: "Rahul Sharma" }} />
        <Card type={CardType.Artist} data={{ name: "Rahul Sharma" }} />
        <Card type={CardType.Artist} data={{ name: "Rahul Sharma" }} />
        <Card type={CardType.Artist} data={{ name: "Rahul Sharma" }} />
        <Card type={CardType.Artist} data={{ name: "Rahul Sharma" }} />
        <Card type={CardType.Artist} data={{ name: "Rahul Sharma" }} />
      </div>
    </section>
  );
};

const TopTracks = () => {
  return (
    <section className="px-[32px] mt-[40px]">
      <header className="flex justify-between mb-4">
        <div className="grow">
          <h2 className="text-2xl leading-normal">
            <Link to={""} className="hover:underline">
              {" "}
              Top tracks this month{" "}
            </Link>
          </h2>
          <p className="text-sm text-gray"> Only visible to you </p>
        </div>
        <Link to={""} className="block text-sm leading-normal text-gray ml-2 hover:underline">
          <span className=""> Show all </span>
        </Link>
      </header>
      <div className="flex flex-col">
        {[1, 2, 3, 4, 5].map((track, index) => (
          <Track index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

const Track = ({ index }: { index: number }) => {
  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {});

  return (
    <div className="group">
      <div className="px-4 h-[56px] grid grid-cols-[16px_4fr_2fr_minmax(120px,_1fr)] gap-4 rounded hover:bg-black-2" onDoubleClick={() => setPlaying(!isPlaying)}>
        <div className="flex items-center">
          <button className="flex min-w-[16px] h-[16px] min-h-[16px] justify-center items-center" onClick={() => setPlaying(!isPlaying)}>
            {isPlaying ? (
              <>
                <span className="block group-hover:hidden"> <AudioWaveIcon /> </span>
                <span className="hidden group-hover:block">
                  <TrackPlayIcon />{" "}
                </span>
              </>
            ) : (
              <>
                <span className="block group-hover:hidden text-gray"> { index + 1 } </span>
                <span className="hidden group-hover:block">
                  <TrackPauseIcon />{" "}
                </span>
              </>
            )}
          </button>
        </div>
        <div className="flex items-center">
          <img
            src="data:image/jpeg;base64,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"
            className="mr-4 w-[40px] h-[40px] object-cover shrink-0 bg-red-700"
          />
          <div className="grid grid-flow-row">
            <div> City Slump </div>
            <span className="text-sm text-gray">
              <Link to={""} className="hover:underline">
                Raja Kumari
              </Link>
              {", "}
              <Link to={""} className="hover:underline">
                DIVINE
              </Link>
            </span>
          </div>
        </div>
        <div className="flex items-center shrink-0">
          <Link to={""} className="text-sm text-gray line-clamp-1 hover:underline">
            O Bedardeya (From "Tu Jhoothi Main Makkaar")
          </Link>
        </div>
        <div className="flex items-center justify-self-end">
          <button className="opacity-0 group-hover:opacity-100 mr-4">
            {" "}
            <TrackLikeIcon />{" "}
          </button>
          <div className="text-sm text-gray mr-4 ml-4 grow flex justify-end">3:24</div>
          <button className="opacity-0 group-hover:opacity-100">
            {" "}
            <TrackMoreIcon />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

const PublicPlaylist = () => {
  return (
    <section className="px-[32px] mt-[40px]">
      <header className="flex justify-between mb-4">
        <div className="grow">
          <h2 className="text-2xl leading-normal">
            <Link to={""} className="hover:underline">
              {" "}
              Public Playlists
            </Link>
          </h2>
        </div>
        <Link to={""} className="block text-sm leading-normal text-gray ml-2 hover:underline">
          <span className=""> Show all </span>
        </Link>
      </header>
      <div className="grid grid-cols-6 gap-6">
        <Card type={CardType.Playlist} data={{ name: "Playlist #24" }} />
        <Card type={CardType.Playlist} data={{ name: "Soft song" }} />
        <Card type={CardType.Playlist} data={{ name: "Playlist #12" }} />
        <Card type={CardType.Playlist} data={{ name: "Sleep Chill song" }} />
        <Card type={CardType.Playlist} data={{ name: "My Favorite songs" }} />
        <Card type={CardType.Playlist} data={{ name: "Playlist #8" }} />
      </div>
    </section>
  );
};

const Following = () => {
  return (
    <section className="px-[32px] mt-[40px]">
      <header className="flex justify-between mb-4">
        <div className="grow">
          <h2 className="text-2xl leading-normal">
            <Link to={""} className="hover:underline">
              {" "}
              Following
            </Link>
          </h2>
        </div>
        <Link to={""} className="block text-sm leading-normal text-gray ml-2 hover:underline">
          <span className=""> Show all </span>
        </Link>
      </header>
      <div className="grid grid-cols-6 gap-6">
        <Card type={CardType.Profile} data={{ name: "Arjit Singh" }} />
        <Card type={CardType.Profile} data={{ name: "Shrusti Tawade" }} />
        <Card type={CardType.Profile} data={{ name: "King" }} />
        <Card type={CardType.Profile} data={{ name: "Dhanvi Bhanushali" }} />
        <Card type={CardType.Profile} data={{ name: "Kaushiki Singh" }} />
        <Card type={CardType.Profile} data={{ name: "Jubin Nautiyal" }} />
      </div>
    </section>
  );
};

export default User;
