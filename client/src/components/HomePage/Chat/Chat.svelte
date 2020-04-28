<script>
  import { onMount, onDestroy } from "svelte";
  import { Card } from "svelte-chota";
  import chatStore from "../../../app/Store/chat/chat.store.js";
  import SingleChat from "./SingleChat.svelte";
  import AppBar from "../AppBar/AppBar.svelte";
  import SearchBar from "../SearchBar/SearchBar.svelte";
  import socketStore from "../../../app/Store/socket/socket.store.js";
  import authStore from "../../../app/Store/auth/auth.store.js";

  let unsubscribe;
  let socketUnsubscribe;
  let authUnsubscribe;
  let newChatSocket;
  let user;
  let chats = [];

  const getChats = () => {
    unsubscribe = chatStore.subscribe(chat => {
      chats = chat;
    });
  };

  const setState = () => {
    authUnsubscribe = authStore.subscribe(res => {
      user = res.user;

      socketUnsubscribe = socketStore.subscribe(res => {
        newChatSocket = res.newChatSocket;

        newChatSocket.on("newChatAdded", res => {
          console.log(res);
          chatStore.addNewChat(res.chat);
        });
      });
    });
  };

  onMount(() => {
    getChats();
    setState();
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<AppBar />
<SearchBar />
<Card style="height: 500px; overflow:auto">
  {#each chats as chat}
    <SingleChat {chat} />
  {/each}
</Card>
