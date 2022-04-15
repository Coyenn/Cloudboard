<div align="center">
  <h2>Cloudboard</h2>
  <p>A self-hosted dashboard for services and websites</p>
  <img src="./screenshots/dark.png" alt="dark screenshot" border="0">
  <img src="./screenshots/light.png" alt="light screenshot" border="0">
</div>
<h3>Quickstart</h3>
<h4>Docker</h4>
<p>Cloudboard is available on Docker Hub</p>
<a href="https://hub.docker.com/r/coyann/cloudboard">https://hub.docker.com/r/coyann/cloudboard</a>
<h4>Docker-Compose</h4>
<code>docker-compose -f docker-compose.prod.yml up</code></p>
<h3>Usage</h3>
<h4>Database Persistence</h4>
<p>Persisting the database can be done by persisting <code>prisma/app.db</code>. (e.g. Mounting /app/prisma/app.db in docker)</p>