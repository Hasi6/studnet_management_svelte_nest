<script>
  import { onMount, onDestroy } from "svelte";
  import { Card } from "svelte-chota";
  import chatStore from "../../../app/Store/chat/chat.store.js";
  import SingleChat from "./SingleChat.svelte";
  import AppBar from "../AppBar/AppBar.svelte";
  import SearchBar from "../SearchBar/SearchBar.svelte";
  import socketStore from "../../../app/Store/socket/socket.store.js";
  import authStore from "../../../app/Store/auth/auth.store.js";
  import { searchMessages } from "../../../app/helpers/searchResultsHelper.js";

  let unsubscribe;
  let socketUnsubscribe;
  let chatSocketUnsubscribe;
  let authUnsubscribe;
  let newChatSocket;
  let chatSocket;

  let user;
  let chats = [];
  let allChats = [];

  const getChats = () => {
    unsubscribe = chatStore.subscribe(chat => {
      chats = chat;
      allChats = chat;
    });
  };

  const setState = () => {
    authUnsubscribe = authStore.subscribe(res => {
      user = res.user;

      socketUnsubscribe = socketStore.subscribe(res => {
        newChatSocket = res.newChatSocket;
        chatSocket = res.chatSocket;
        newChatSocket.on("newChatAdded", re => {
          chatStore.addNewChat(re.chat);
          chatSocket.emit("newChatAdded", { chatId: re.chat._id });
        });
      });
    });
  };

  const searchChats = e => {
    // const result = searchMessages(e, allChats, chats);
    // console.log(result);
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
<SearchBar {searchChats} />
<Card style="height: 500px; overflow:auto">
  {#each chats as chat}
    <SingleChat {chat} />
  {/each}
</Card>
