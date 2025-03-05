<script>
  let hamOpen = false;

  function toggleMenu() {
    hamOpen = !hamOpen;
  }
</script>

<header class="w-11/12 max-w-[1080px] mx-auto flex justify-between items-center relative">
  <img class="w-24" src="img/almost logo.png" />

  <img 
    src={hamOpen ? "img/ham-close.svg" : "img/ham-open.svg"} 
    class="w-5 ham md:hidden cursor-pointer" 
    on:click={toggleMenu} 
  />

  <nav 
    class="flex bg-a-70 flex-col gap-10 items-center absolute top-16 right-0  p-4 rounded-md transition-transform duration-300 md:static md:flex md:flex-row md:bg-p-90"
    class:hidden={!hamOpen} 
    class:flex={hamOpen}
  >
    <a href="#">Services</a>
    <a href="#">Our Work</a>
    <a href="#">Pricing</a>
    <a href="#">About</a>
    <a class="btn" href="#">Hire us</a>
  </nav>
</header>
