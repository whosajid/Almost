<script>
  export let heading = "";
  export let details = "";
</script>

<div>
  <h2>{heading}</h2>
  <p>{details}</p>
</div>

<style>
div {
  margin: var(--spacing7) auto var(--spacing6) auto;
  text-align: center;
  padding: var(--spacing6) 0;
  background: var(--accent);
}
h2 {
  font: var(--h1);
}
</style>