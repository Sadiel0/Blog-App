import React from "react";
import "./single.css";
import Sidebar from "../../components/sidebar/sidebar";
import SinglePost from "../../components/singlepost/singlePost";
export default function Single() {
  return (
    <di className="single">
      <SinglePost />
      <Sidebar />
      Single page
    </di>
  );
}
