import React from "react";
import Page from "./Page";
import CollectionHeader from "../components/CollectionHeader";
import Card from "../components/Card";
import { CardType } from "../types";
type Props = {};

function Artists({}: Props) {
  return (
    <section className="px-8">
      <List />
    </section>
  );
}

const List = () => {
  return (
    <div className="">
      {/* list header */}
      <div className="my-4">
        <h1 className="text-2xl leading-normal"> Artists </h1>
        <div></div>
      </div>
      {/* list content */}
      <div className="grid grid-cols-5 gap-6">
        <Card type={CardType.Artist} data={{ name: "Arjit Singh", user: "Artist" }} />
        <Card type={CardType.Artist} data={{ name: "Jubin Nautiyal", user: "Artist" }} />
        <Card type={CardType.Artist} data={{ name: "Lata Mangeskar", user: "Artist" }} />
        <Card type={CardType.Artist} data={{ name: "Pritam Singh", user: "Artist" }} />
        <Card type={CardType.Artist} data={{ name: "Dhanvi Bhanushali", user: "Artist" }} />
        <Card type={CardType.Artist} data={{ name: "Arjit Singh", user: "Artist" }} />
      </div>
    </div>
  );
};

export default Artists;
