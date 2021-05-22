import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.js";
import Highlight from "reveal.js/plugin/highlight/highlight.js";

export default function Home() {
  useEffect(() => {
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
      <div class="reveal">
        <div class="slides">
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
