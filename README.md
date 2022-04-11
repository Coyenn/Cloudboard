<div align="center">
  <h2>Cloudboard</h2>
  <p>A self-hosted dashboard for services and websites</p>
  <a href="https://ibb.co/J76vXJd"><img src="https://i.ibb.co/pzVfCFP/Bildschirmfoto-2021-10-16-um-18-58-33.png" alt="Bildschirmfoto-2021-10-16-um-18-58-33" border="0"></a>
</div>
<h3>Usage</h3>
<p>I'm guessing you want to run Cloudboard on your HomeLab. To do that, run the following command. (Docker and Docker-Compose need to be installed) <code>docker-compose -f docker-compose.prod.yml up</code></p>
<p>Persisting the database can be done by saving or mounting /app/prisma/app.db</p>
<h3>Docker</h3>
<p>Cloudboard is available on Docker Hub.</p>
<a href="https://hub.docker.com/r/coyann/cloudboard">https://hub.docker.com/r/coyann/cloudboard</a>