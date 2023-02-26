import React, { Fragment } from "react";
import Search from "./Search";
import Users from "./Users";
export default function Home() {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
}
