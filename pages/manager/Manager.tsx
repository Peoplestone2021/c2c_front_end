import { useRef } from "react";
import Link from "next/link";
import Sidebar from "./about/sidebar";
import Appbar from "../bar/appbar";

const Manager = () => {


  return (
    <div>
      <Appbar />
      <Sidebar />
    </div>
  );
};
export default Manager;