<script>
  import { Input, Field, Button } from "svelte-chota";
  import { onMount, onDestroy } from "svelte";
  import chatStore from "../../../app/Store/chat/chat.store.js";

  let unsubscribe;
  let chats = [];

  const getChats = () => {
    unsubscribe = chatStore.subscribe(chat => {
      chats = chat;
    });
  };

  onMount(() => {
    getChats();
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<style>

</style>

<h1>ChatList</h1>
