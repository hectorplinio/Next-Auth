import Layout from "../components/layout";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "../components/header.module.css";


export default function Page() {
  const { data: session, status } = useSession();
  

  return (
    <Layout>
      <h1>This is a public page.</h1>
      <h3>All users have access at this page.</h3>
    </Layout>
  );
}
