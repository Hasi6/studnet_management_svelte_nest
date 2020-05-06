<script>
  import { onMount, onDestroy } from "svelte";
  import { Input, Field, Button, Card } from "svelte-chota";
  import chatIdStore from "../../../app/Store/chat/chatId.store";
  import { v4 as uuid } from "uuid";
  import authStore from "../../../app/Store/auth/auth.store.js";
  import socketStore from "../../../app/Store/socket/socket.store.js";
  export let chat;

  let unsubscribe;
  let user;
  let socketUnsubscribe;
  let chatSocket;
  let otherUser;
  let typing;

  const getStore = () => {
    unsubscribe = authStore.subscribe(res => {
      user = res.user;
    });
    otherUser = chat.users[0]._id === user._id ? chat.users[1] : chat.users[0];

    socketUnsubscribe = socketStore.subscribe(res => {
      res.chatSocket.on("typing", res => {
        if (res.chatId === chat._id && res.user !== user._id) {
          typing = true;
          setTimeout(() => {
            typing = false;
          }, 1000);
        }
      });
    });
  };

  const changeChatId = () => {
    chatIdStore.addChatId(chat._id);
  };

  onMount(() => {
    getStore();
  });

  onDestroy(() => {
    unsubscribe();
    socketUnsubscribe();
  });
</script>

<style>
  img {
    width: 50px !important;
    height: 50px;
    border-radius: 50%;
    margin-top: 5px;
  }
  .singleChat {
    display: flex;
    justify-content: space-between;
  }
</style>

{#if otherUser}
  <Card
    style="margin-bottom: 10px; cursor:pointer"
    on:click={() => changeChatId()}>
    <div class="singleChat">
      <div style="flex: 1">
        <img src={otherUser.image} alt={otherUser.username} />
      </div>
      <div style="flex:2">
        <p>Hasi</p>
        <p>
          {chat.lastMessage.substr(0, 10)}{chat.lastMessage.length > 10 ? '...' : ''}
        </p>
      </div>
      <div style="flex:1">
        {#if typing}
          <p>Typing...</p>
        {/if}
      </div>
    </div>
  </Card>
{/if}
