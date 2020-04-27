<script>
  import { onMount, onDestroy } from "svelte";
  import { Card } from "svelte-chota";
  import chatStore from "../../../app/Store/chat/chat.store.js";
  import SingleChat from "./SingleChat.svelte";
  import AppBar from "../AppBar/AppBar.svelte";
  import SearchBar from "../SearchBar/SearchBar.svelte";

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

<AppBar />
<SearchBar />
<Card style="height: 500px; overflow:auto">
  <SingleChat />
  <SingleChat />
  <SingleChat />
  <SingleChat />
  <SingleChat />
</Card>
