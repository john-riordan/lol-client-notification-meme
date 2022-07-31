<script>
  import { saveAs } from 'file-saver';
  import domtoimage from 'dom-to-image';

  import Button from "./lib/components/Button.svelte"

  let useTwitter = false;
  let notificationTitle = 'Challenges Are Here';
  let notificationText = "Master all five categories, unlock titles & tokens, and upgrade your crystal in League's newest progression system!"
  let notificationRef;

  $: avatar = '';

  let linkInput = null;
  let twitterInput = null;

  function handleDownload() {
    domtoimage.toBlob(notificationRef)
    .then(function (blob) {
        saveAs(blob, 'league-notification-meme.png');
    });
  }
</script>

<main>
  <header>
    <h1 class="instructions">Both text values (the title and description) are editable.</h1>
    <span class="inspiration">Inspired by <a href="https://twitter.com/draggles/status/1548006910405709824?s=20&t=MKm31IOTsX49bcRtXiZ2ew">this immaculate tweet</a></span>
  </header>
  <div class="frame" bind:this={notificationRef}>
    <img src="client-bg-2.png" class="bg-img" alt="" />
    <div class="notification">
      <span class="tip"></span>
      <div class="avatar" class:noBg={useTwitter || avatar}>
        {#if useTwitter}
          <img src={`https://unavatar.io/twitter/${avatar}`} alt="Avatar" width="40" height="40" />
        {:else if avatar}
          <img src={avatar} alt="Avatar" width="40" height="40" />          
        {/if}
      </div>
      <div class="notification-content">
        <span class="title" contenteditable="true">{notificationTitle}</span>
        <p class="content" contenteditable="true">{notificationText}</p>
      </div>
    </div>
  </div>
  <div class="controls">
    <div class="controls-left">
      {#if useTwitter}
        <div class="avatar-input">
          <input type="text" bind:this={twitterInput} placeholder="@ twitter handle" class="input" />
          <Button onClick={() => avatar = twitterInput?.value}>Set avatar</Button>
        </div>
      {:else}
        <div class="avatar-input">
          <input type="text" bind:this={linkInput} placeholder="Avatar image URL" class="input" />
          <Button onClick={() => avatar = linkInput?.value}>Set avatar</Button>
        </div>
      {/if}
      <label class="flex align-center gap-0_25" style="cursor: pointer;">
        <input type="checkbox" bind:checked={useTwitter} on:click={() => avatar = ''} />
        <span>Use Twitter Avatar</span>
      </label>
    </div>
    <Button round onClick={handleDownload} label="Download Image" className="download">
      <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.25 14.15L26.35 21.05V4H21.025V21L14.775 14.75L11 18.525L23.7 31.25L37 17.95L33.25 14.15ZM2 44H46V24L40 30V38H8V30L2 24V44Z" fill="#E3E5EA"/>
      </svg>
    </Button>
  </div>
</main>
<footer>
  <a href="https://twitter.com/johnriordan">@johnriordan</a>
</footer>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 1.5rem;
    padding: 0 3rem;
  }
  header {
    text-align: center;
  }
  .instructions {
    display: block;
    font-size: 1em;
    font-weight: 400;
    color: var(--c5);
    margin: 0;
    
    text-align: center;
  }
  .inspiration {
    font-size: 0.875em;
    color: var(--c6);
  }
  .inspiration a {
    color: var(--c5);
  }
  .frame {
    position: relative;
    display: inline-block;
    padding: 48px;
    padding-top: 95px;
    border: 2px solid hsla(36, 41%, 35%, 1);
    border-top: none;
    overflow: hidden;
  }
  .bg-img {
    position: absolute;
    top: 0;
    left: -11px;
    max-width: none;
    pointer-events: none;
  }
  .notification {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 20px;
    background: var(--yellow);
    width: 375px;
    padding: 20px;
    border-radius: 2px;
  }
  .tip {
    position: absolute;
    display: grid;
    place-content: grid;
    place-content: center;
    width: 18px;
    height: 18px;
    top: 0;
    left: 50%;
    background: var(--yellow);
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  .tip::before {
    content: "";
    width: 8px;
    height: 8px;
    background: var(--gold);
  }

  .avatar {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 50%;
    background: url('/fallback.png') no-repeat center var(--gold-dark);
    background-size: cover;
    overflow: hidden;
  }
  .avatar.noBg {
    background-image: none;
  }
  .notification-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: var(--gold-dark);
  }
  .title {
    display: block;
    font-family: 'Beaufort for LOL';
    font-size: 1.125em;
    letter-spacing: 0.05em;
  }
  .content {
    margin: 0;
    font-size: 0.875em;
  }
  .controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
  .input {
    width: 18ch;
  }
  .controls-left {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  .avatar-input {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  footer {
    width: 100%;
    text-align: center;
    padding: 3rem;
    color: var(--c5)
  }
  footer a {
    color: inherit;
  }

  @media (max-width: 600px) {
    main {
      gap: 1rem;
      padding: 0 1rem;
    }
    .frame {
      padding: 12px;
      padding-top: 98px;
      background: url('/client-bg-2.png') no-repeat top left -85px;
    }
    .bg-img {
      position: absolute;
      top: 0;
      left: -64px;
      max-width: none;
    }
    .notification {
      width: 340px;
    }
    .controls,
    .controls-left {
      flex-direction: column;
      gap: 1rem;
    }
    :global(.download) {
      transform: scale(1.2)
    }
  }
</style>
