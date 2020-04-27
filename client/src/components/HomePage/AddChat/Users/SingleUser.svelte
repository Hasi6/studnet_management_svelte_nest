<script>
  import { Input, Field, Button, Card } from "svelte-chota";
  import { onMount, onDestroy } from "svelte";
  import { Modal } from "sveltestrap";
  import { v4 as uuid } from "uuid";
  import NewChatAddForm from "../NewChatAddForm/NewChatAddForm.svelte";
  import screenStore from "../../../../app/Store/screen/screen.store.js";
  import chatIdStore from "../../../../app/Store/chat/chatId.store.js";
  import authStore from "../../../../app/Store/auth/auth.store.js";
  import AddMessage from "../../../HomePage/Messages/MessagesComponent/AddMessage/AddMessage.svelte";

  export let user;

  let loggedUser;
  let unsubscribe;

  const setLoggedUser = () => {
    unsubscribe = authStore.subscribe(res => {
      loggedUser = res.user;
    });
  };

  let visible = false;

  const toggle = () => (visible = !visible);

  let message = "";

  const sendMessage = () => {};

  onMount(() => {
    setLoggedUser();
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

<Card style="margin-bottom: 10px; cursor:pointer" on:click={() => toggle()}>
  <div class="singleChat">
    <div style="flex: 1">
      <img src={user.image} alt={user.username} />
    </div>
    <div style="flex:2">
      <p>{user.username}</p>
      <p>{user.email.substr(0, 10)}{user.email.length > 10 ? '...' : ''}</p>
    </div>
    <div style="flex:1">
      <p>Typing...</p>
    </div>
  </div>
</Card>

<Modal isOpen={visible} {toggle}>
  <h3>Send a Message to {user.username}</h3>
  <AddMessage />

</Modal>
