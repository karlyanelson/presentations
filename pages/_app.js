import "../node_modules/reveal.js/dist/reset.css";
import "../node_modules/reveal.js/dist/reveal.css";
import "../node_modules/reveal.js/dist/theme/black.css";
import "../node_modules/reveal.js/plugin/highlight/monokai.css";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
