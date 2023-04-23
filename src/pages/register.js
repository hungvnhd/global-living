import Head from "next/head";
import Register from "../components/pages/Register";
export default function tinTuc() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Register></Register>
    </>
  );
}