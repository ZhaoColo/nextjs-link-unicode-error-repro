import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Page</title>
      </Head>

      <main style={{ textAlign: "center" }}>
        <h1 id="h" style={{ marginTop: "60vh", minHeight: "100vh" }}>
          Section
        </h1>
      </main>
    </div>
  );
}
