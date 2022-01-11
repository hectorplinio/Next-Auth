import { useSession, signIn, signOut } from "next-auth/react";
import Layout from '../components/layout'

export default function Component() {
  const { data: session } = useSession();
  console.log();
    return (
      <Layout>
        {session && (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
      {!session && (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )}
    </Layout>
    )
      }
