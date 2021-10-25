import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>页</title>
      </Head>

      <main style={{ textAlign: "center" }}>
        <h1 id="头" style={{ marginTop: "60vh", minHeight: "100vh" }}>
          Section
        </h1>
      </main>
    </div>
  );
}
