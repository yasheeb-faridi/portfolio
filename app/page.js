'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <div >
    <Navbar></Navbar>
    <Header></Header>
    <About></About>
    <Skills></Skills>

    </div>
  );
}
