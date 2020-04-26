<script>
  import { onMount, onDestroy } from "svelte";
  import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
  import chatIdStore from "../../../app/Store/chat/chatId.store";
  import MessagesComponent from "./MessagesComponent/MessagesComponent.svelte";

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
  <MessagesComponent />
{:else}
  <WelcomeMessage />
{/if}
