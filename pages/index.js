import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>nextjs-link-unicode-error-repro</title>
      </Head>

      <main style={{ textAlign: "center" }}>
        <div style={{ minHeight: "60vh" }}>
          <p>
            <Link href="#文">
              <a>link to section</a>
            </Link>{" "}
            <button onClick={() => router.push("#文")}>jump to section</button>{" "}
            <a href="#文">anchor to section</a>
          </p>
          <p>
            <Link href="/页#头">
              <a>link to page</a>
            </Link>{" "}
            <button onClick={() => router.push("/页#头")}>route to page</button>{" "}
            <a href="/页#头">anchor to page</a>
          </p>
        </div>

        <h1 id="文" style={{ minHeight: "100vh" }}>
          Section
        </h1>
      </main>
    </div>
  );
}
