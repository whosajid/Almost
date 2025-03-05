<footer>
  <div class="footer">
    <div class="footer-left">
      <img class="logo" src="img/almost logo.png" />
      <p>We build websites that load in under a minute. <br />Sometimes even faster.</p>
    </div>
    <div class="footer-right">
      <div class="social-media-icons">
        <img src="img/icons8-github.svg" class="social-media" />
        <img src="img/icons8-linkedin.svg" class="social-media" />
        <img src="img/icons8-x.svg" class="social-media" />
        <img src="img/icons8-youtube.svg" class="social-media" />
      </div>
      <p>
        3 Way, 69th Street, Somewhere, USB <br />
        123-456-7890 <br />
        bye@almost.dev
      </p>
    </div>
  </div>
</footer>

<style>
footer {
  background: var(--accent);
  padding: var(--spacing5) 0 var(--spacing6) 0;
}
.footer {
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 600px) {
  .footer {
    flex-direction: column;
    gap: var(--spacing4);
  }
}
.footer-right,
.footer-left {
  display: flex;
  flex-direction: column;
}
.social-media-icons {
  display: flex;
  gap: var(--spacing4);
}
.social-media {
  width: 32px;
}
.logo {
  width: 100px;
}
</style>