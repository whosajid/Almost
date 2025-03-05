<script>
  export let heading;
  export let details;
  export let linkText;
  export let link;
</script>

<section class="center padding6">
  <h2>{heading}</h2>
  <p>{details}</p>
  <a href={link} class="btn">{linkText}</a>
</section>
