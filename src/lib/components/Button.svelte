<script>
  export let round = false;
  export let onClick = () => {};
  export let label = '';
</script>

{#if label}
  <div class="label-container">
    <button on:click={onClick} class:round>
      <span><slot /></span>
    </button>
    <span class="label">{label}</span>
  </div>
{:else}
  <button on:click={onClick} class:round>
    <span><slot /></span>
  </button>
{/if}

<style>
  button {
    --c1: hsla(40, 43%, 52%, 1);
    --c2: hsla(39, 52%, 39%, 1);
    --c3: hsla(37, 46%, 29%, 1);
    display: block;
    padding: 2px;
    color: hsla(45, 38%, 69%, 1);
    background: linear-gradient(to bottom, var(--c1), var(--c2), var(--c3));
    border: none;
  }
  button:hover {
    --c1: hsla(41, 50%, 87%, 1);
    --c2: hsla(41, 55%, 69%, 1);
    --c3: hsla(41, 55%, 52%, 1);
    color: var(--c1);
  }
  button > * {
    pointer-events: none;
  }
  button > span {
    display: block;
    padding: 6px;
    background: hsla(210, 14%, 14%, 1);
  }

  button.round,
  button.round > span {
    border-radius: 50%;
    aspect-ratio: 1;
  }

  .label-container {
    position: relative;
  }
  .label {
    position: absolute;
    top: 50%;
    right: 0%;
    white-space: nowrap;
    transform: translate(calc(100% + 0.25rem), -50%);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.15s ease-in, visibility 0.15s ease-in, transform 0.15s ease-in;
  }
  .label-container:hover .label {
    opacity: 1;
    visibility: visible;
    transform: translate(calc(100% + 0.5rem), -50%);
  }
</style>