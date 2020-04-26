<script>
  import { onMount, onDestroy } from "svelte";
  import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
  import chatIdStore from "../../../app/Store/chat/chatId.store";

  let chatId;
  let unsubscribe;

  onMount(() => {
    unsubscribe = chatIdStore.subscribe(chid => {
      chatId = chid;
    });
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<style>

</style>

{#if chatId}
  <h1>{chatId}</h1>
{:else}
  <WelcomeMessage />
{/if}
