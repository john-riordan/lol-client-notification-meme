<script>
  import { saveAs } from 'file-saver';
  import domtoimage from 'dom-to-image';

  let useTwitter = false;
  let twitterUser = 'johnriordan'
  let avatarURL = 'https://pbs.twimg.com/profile_images/1547641310470815748/jP9mC_36_normal.jpg';
  let notificationTitle = 'Challenges Are Here';
  let notificationText = "Master all five categories, unlock titles & tokens, and upgrade your crystal in League's newest progression system!"

  let notificationRef;

  function handleDownload() {
    domtoimage.toBlob(notificationRef)
    .then(function (blob) {
        saveAs(blob, 'league-notification-meme.png');
    });
  }
</script>

<main>
  <div class="frame" bind:this={notificationRef}>
    <div class="notification">
      <span class="tip"></span>
      <div class="avatar">
        {#if useTwitter}
          <img src={`https://unavatar.io/twitter/${twitterUser}`} alt="Avatar" width="40" height="40" />
        {:else if avatarURL}
          <img src={avatarURL} alt="Avatar" width="40" height="40" />          
        {/if}
      </div>
      <div class="notification-content">
        <span class="title" contenteditable="true">{notificationTitle}</span>
        <p class="content" contenteditable="true">{notificationText}</p>
      </div>
    </div>
  </div>
  <div class="controls">
    <label>
      <input type="checkbox" bind:value={useTwitter} />
      Use twitter profile image
    </label>
    {#if useTwitter}
      <input type="text" bind:value={twitterUser} placeholder="@ twitter handle" />
    {:else}
      <input type="text" bind:value={avatarURL} placeholder="Avatar URL" />
    {/if}
    <button on:click={handleDownload}>Download image</button>
  </div>
</main>







<style>
  main {
    display: grid;
    place-content: center;
    width: 100vw;
    height: 100vh;
    gap: 1rem;
  }
  .frame {
    position: relative;
    display: inline-block;
    background: url('assets/client-bg.png') no-repeat top left;
    padding: 48px;
    padding-top: 95px;
    padding-right: 0;
    border: 1px solid hsla(36, 41%, 35%, 1);
    border-top: none;
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
    background: var(--gold);
    overflow: hidden;
  }
  .avatar img {

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
</style>
