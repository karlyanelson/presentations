import { useEffect } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import dynamic from "next/dynamic";

const Reveal = dynamic(() => import("reveal.js"), { ssr: false });

const Markdown = dynamic(
  () => import("reveal.js/plugin/markdown/markdown.js"),
  { ssr: false }
);

const Highlight = dynamic(
  () => import("reveal.js/plugin/highlight/highlight.js"),
  { ssr: false }
);

export default function Home() {
  useEffect(() => {
    console.log("navigator", navigator);
    if (typeof window !== "undefined") {
      let deck = new Reveal({
        controls: true,
        progress: true,
        history: true,
        center: true,
        plugins: [Markdown, Highlight],
      });
      deck.initialize();
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>{siteTitle}</h1>
      <div className="reveal">
        <div className="slides">
          <section
            data-markdown="./markdown.md"
            data-separator="---"
            data-separator-vertical="///"
            data-separator-notes="^Note:"
            data-charset="iso-8859-15"
          ></section>
        </div>
      </div>
    </Layout>
  );
}
