<script>
  export let round = false;
  export let onClick = () => {};
</script>

<button on:click={onClick} class:round>
  <span><slot /></span>
</button>

<style>
  button {
    padding: 2px;
    color: hsla(45, 38%, 69%, 1);
    background: linear-gradient(to bottom, hsla(40, 43%, 52%, 1), hsla(39, 52%, 39%, 1), hsla(37, 46%, 29%, 1));
    border: none;
  }
  button > span {
    display: block;
    padding: 8px;
    background: hsla(210, 14%, 14%, 1);
  }

  button.round,
  button.round > span {
    border-radius: 50%;
    aspect-ratio: 1;
  }
</style>