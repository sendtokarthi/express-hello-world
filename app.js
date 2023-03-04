const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html2));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const html2=`<html>   <head>  <meta name="viewport" content="width=device-width, initial-scale=1.0"></head> <body>  <a href="http://152.67.160.139:3000/watch" referrerpolicy="origin" style="font-weight: bolder;" >karumuga Bank Nifty  </a><br><br><a href="http://152.67.160.139:9000/watch" style="font-weight: bolder;">karumuga Nifty </a><br> <br><a href="http://152.67.162.92:3000/watch" style="font-weight: bolder;" > <a href="http://129.154.39.199:3000/watch" referrerpolicy="origin" style="font-weight: bolder;" >Dayanitha Bank Nifty  </a><br><br><a href="http://129.154.39.199:9000/watch" style="font-weight: bolder;">Dayanitha Nifty </a><br> <br><a href="http://152.67.162.92:3000/watch" style="font-weight: bolder;" > Paper Bank Nifty </a><br><br><a href="http://152.67.162.92:9000/watch" style="font-weight: bolder;" >Paper Nifty </a><br><br><a href="http://152.67.162.92:4000/watch" style="font-weight: bolder;" >Paper FinNifty </a>  </body></html>`
const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Karthikeyan!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Render!
    </section>
  </body>
</html>
`
