import Head from 'next/head'
import NavBar from "./components/global/nav-bar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <NavBar active="home"></NavBar>
      <h1>hey</h1>
    </div>
  )
}
