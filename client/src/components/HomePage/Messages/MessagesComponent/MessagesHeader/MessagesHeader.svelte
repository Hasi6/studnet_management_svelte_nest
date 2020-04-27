<script>
  import { Input, Button, Nav, Tag, Field } from "svelte-chota";
  import { onMount, onDestroy } from "svelte";
  import { mdiDotsHorizontal } from "@mdi/js";
  import chatStore from "../../../../../app/Store/chat/chat.store.js";
  import chatIdStore from "../../../../../app/Store/chat/chatId.store.js";
  import authStore from "../../../../../app/Store/auth/auth.store.js";
  export let searchKey;
  export let setSearchKey;
  let chatId;

  let unsubscribe;
  let authUnsubscribe;
  let chat;
  let otherUser;
  let user;
  let chatUnsucbscribe;

  const setState = () => {
    chatUnsucbscribe = chatIdStore.subscribe(res => {
      chatId = res;
    });

    unsubscribe = chatStore.subscribe(res => {
      chat = res.filter(ch => ch._id === chatId)[0];
    });

    authUnsubscribe = authStore.subscribe(res => {
      user = res.user;

      otherUser =
        chat.users[0]._id === res.user._id ? chat.users[1] : chat.users[0];
    });
  };

  onMount(() => {
    setState();
  });

  onDestroy(() => {
    unsubscribe();
    chatUnsucbscribe();
    authUnsubscribe();
  });
</script>

<style>
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
</style>

<Nav class="navbar">
  <div slot="left">
    {#if otherUser}
      <img
        style="height:100px"
        src={otherUser.image}
        alt={otherUser.username} />
      <p>{otherUser.username}</p>
    {/if}
  </div>
  <p slot="right">
    <Field gapless>

      <Input
        placeholder="Search Messages"
        on:input={e => setSearchKey(e.target.value)} />

    </Field>
  </p>
  <a slot="right" href="/" style="z-index:1000">
    <Button
      style="border:none; z-index:100!important"
      dropdown=""
      autoclose
      outline
      iconRight={mdiDotsHorizontal}>
      <p>Profile</p>
      <p>Settings</p>
      <hr />
      <p>Logout</p>
    </Button>
  </a>
</Nav>
{searchKey}
