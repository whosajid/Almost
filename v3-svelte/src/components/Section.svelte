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

<section class="flex margin6">
  <div>
    <h2>{heading}</h2>
    <p>{details}</p>
    <a class="btn" href={link}>{linkText}</a>
  </div>
  <img src={img} />
</section>

<section class="flex margin6 reverse">
  <div>
    <h2>{heading2}</h2>
    <p>{details2}</p>
    <a class="btn" href={link2}>{linkText2}</a>
  </div>
  <img src={img2} />
</section>