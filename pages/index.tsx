import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import firebase from "../firebase/clientApp";

import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {

  const [user, loading, error] = useAuthState(firebase.auth());
 console.log("Loading:", loading, "|", "Current user:", user);

  return <div>Test Vote App</div>;
}