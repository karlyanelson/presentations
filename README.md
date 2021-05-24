# Presentations

Write your presentations in markdown and host them all in one place!

Built with [Reveal.js](https://revealjs.com/) and [Eleventy](https://www.11ty.dev/).

## Use this repo as a template

[Copy this template](https://github.com/karlyanelson/presentations/generate)

## Install dependencies

Requires [Node v14+](https://nodejs.org/en/)

```
npm install
```

## Serve Locally

```
npm run serve
```

serves at

```
http://localhost:8080/presentations/
```

## Export to PDF

[Docs](https://revealjs.com/pdf-export/)

1. Open your presentation with `print-pdf` included in the query string, for example: `http://localhost:8000/?print-pdf`. You can test this at `revealjs.com/demo?print-pdf`.
2. Open the in-browser print dialog (`CTRL/CMD+P`).
3. Change the **Destination** setting to **Save as PDF**.
4. Change the **Layout** to **Landscape**.
5. Change the **Margins** to **None**.
6. Enable the **Background graphics** option.
7. Click **Save** 🎉

![Save to PDF](https://s3.amazonaws.com/hakim-static/reveal-js/pdf-print-settings-2.png)

## Speaker Notes

[Docs](https://revealjs.com/speaker-view/)

reveal.js comes with a speaker notes plugin which can be used to present per-slide notes in a separate browser window. The notes window also gives you a preview of the next upcoming slide so it may be helpful even if you haven't written any notes. Press the »S« key on your keyboard to open the notes window.

A speaker timer starts as soon as the speaker view is opened. You can reset the timer by clicking on it.

Notes are defined by appending an `<aside>` element to a slide as seen below. You can add the `data-markdown` attribute to the aside element if you prefer writing notes using Markdown.

Alternatively you can add your notes in a `data-notes` attribute on the slide. Like `<section data-notes="Something important"></section>`.

```html
<section>
  <h2>Some Slide</h2>

  <aside class="notes">Shhh, these are your private notes 📝</aside>
</section>
```
