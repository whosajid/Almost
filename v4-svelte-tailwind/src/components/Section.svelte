<script>
  export let heading;
  export let details;
  export let link;
  export let linkText;
  export let img;
  export let heading2;
  export let details2;
  export let link2;
  export let linkText2;
  export let img2;
</script>

<section class=" flex items-center my-20 gap-5 flex-wrap">
  <div class="flex-1 min-w-[400px]">
    <h2>{heading}</h2>
    <p>{details}</p>
    <a class="btn" href={link}>{linkText}</a>
  </div>
  <img class="flex-1 min-w-[400px]" src={img} />
</section>

<section class="flex items-center my-20 gap-5 md:flex-row-reverse flex-wrap">
  <div class="flex-1 min-w-[400px]">
    <h2>{heading2}</h2>
    <p>{details2}</p>
    <a class="btn" href={link2}>{linkText2}</a>
  </div>
  <img class="flex-1 min-w-[400px]" src={img2} />
</section>