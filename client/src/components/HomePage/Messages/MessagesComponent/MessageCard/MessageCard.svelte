<script>
  import { onMount, onDestroy } from "svelte";
  import { Card } from "svelte-chota";
  import SingleMessage from "./SingleMessage/SingleMessage.svelte";
  import chatIdStore from "../../../../../app/Store/chat/chatId.store";

  export let messages;

  let chatId;
  let unsubscribe;

  const scrollTop = e => {
    if (document.querySelector(".messageCard").scrollTop < 300) {
      console.log("Hasi");
    }
  };

  const autoScroll = () => {
    const objDiv = document.querySelector(".messageCard");
    if (objDiv) {
      objDiv.scrollTop = objDiv.scrollHeight;
    }
  };

  const getChatId = () => {
    unsubscribe = chatIdStore.subscribe(chat => {
      chatId = chat;
      autoScroll();
    });
  };

  onMount(() => {
    autoScroll();
    getChatId();
    scrollTop();
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<style>
  .messageCard {
    height: 400px !important;
    overflow: auto;
  }
</style>

{chatId}
<Card>
  <div class="messageCard" on:scroll={scrollTop}>

    {#if messages}
      {#each messages as message}
        <SingleMessage {message} />
      {/each}
    {/if}

  </div>
</Card>
