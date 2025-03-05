<script>
  let hamOpen = true;
  function toggleMenu() {
    hamOpen = !hamOpen;
  }
</script>

<header>
  <img class="logo" src="img/almost logo.png" />
  <img src={hamOpen ? "img/ham-close.svg" : "img/ham-open.svg"} class="ham" on:click={toggleMenu} />
  <nav class:show={hamOpen}>
    <a href="#">Services</a>
    <a href="#">Our Work</a>
    <a href="#">Pricing</a>
    <a href="#">About</a>
    <a class="btn" href="#">Hire us</a>
  </nav>
</header>

<style>
  /* header */
header {
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: var(--spacing4) 0;
}

nav {
  display: flex;
  align-items: center;
  gap: var(--spacing5);
}
.ham {
  display: none;
  width: 20px;
}
@media (max-width: 800px) {
  .ham {
    display: block;
  }
  nav {
    display: none;
  }
  nav.show {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: var(--spacing6);
    right: 0px;
    background: var(--accent);
    padding: var(--spacing4);
    gap: var(--spacing4);
    border-radius: var(--spacing2);
  }
}
.logo {
  width: 100px;
}

</style>