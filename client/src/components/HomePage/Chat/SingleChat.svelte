<script>
  import { onMount, onDestroy } from "svelte";
  import { Input, Field, Button, Card } from "svelte-chota";
  import chatIdStore from "../../../app/Store/chat/chatId.store";
  import { v4 as uuid } from "uuid";
  import authStore from "../../../app/Store/auth/auth.store.js";
  export let chat;

  let name =
    "Hasis;hf;al gh fa;slgf a;sga; .ksfvafsk. vfas.kf hv ask.fhv.asfhv";
  let unsubscribe;
  let user;
  let otherUser;
  const getUser = () => {
    unsubscribe = authStore.subscribe(res => {
      user = res.user;
    });
    otherUser = chat.users[0]._id === user._id ? chat.users[1] : chat.users[0];
  };

  const changeChatId = () => {
    chatIdStore.addChatId(uuid());
  };

  onMount(() => {
    getUser();
  });

  onDestroy(() => {
    unsubscribe();
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
        <p>Typing...</p>
      </div>
    </div>
  </Card>
{/if}
