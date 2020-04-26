<script>
  import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
  export let chatId = "Hasi";
</script>

<style>

</style>

{#if chatId}
  <h1>{chatId}</h1>
{:else}
  <WelcomeMessage />
{/if}
