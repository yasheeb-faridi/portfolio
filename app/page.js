'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";


export default function Home() {
  return (
    <div >
    <Navbar></Navbar>
    <Header></Header>
    <About></About>
    <Skills></Skills>
    <Contacts></Contacts>

    </div>
  );
}
