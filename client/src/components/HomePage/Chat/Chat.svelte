<script>
  import { onMount, onDestroy } from "svelte";
  import chatStore from "../../../app/Store/chat/chat.store.js";
  import SingleChat from "./SingleChat.svelte";

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

<SingleChat />
