<div align="center">
  <img src="./screenshots/logo.svg" alt="logo" width="50" height="50" border="0">
  <h2>Cloudboard</h2>
  <p>A self-hosted dashboard for services and websites</p>
  <div>
    <a href="https://cloudboard.tim-ritter.com">Demo</a> |
    <a href="#quickstart">Quickstart</a> |
    <a href="https://hub.docker.com/r/coyann/cloudboard">Docker</a>
  </div>
</div>
<h2 id="quickstart">Quickstart</h2>
<h3>Docker</h3>
<p>Cloudboard is available on Docker Hub: <a href="https://hub.docker.com/r/coyann/cloudboard">https://hub.docker.com/r/coyann/cloudboard</a></p>
<h3>Docker-Compose</h3>
<code>docker-compose -f docker-compose.prod.yml up</code></p>
<h2>Usage</h2>
<h3>Database Persistence</h3>
<p>Cloudboard saves user data to a sqlite file. Use a docker bind mount or volume to persist <code>/app/prisma/app.db</code>.</p>
<h2>Screenshot</h2>
<img src="./screenshots/dark.png" alt="dark screenshot" border="0">