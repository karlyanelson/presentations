import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.js";
import Highlight from "reveal.js/plugin/highlight/highlight.js";

let deck = new Reveal({
  controls: true,
  progress: true,
  history: true,
  center: true,
  plugins: [Markdown, Highlight],
});
deck.initialize();
