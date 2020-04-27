<script>
  import { Card } from "svelte-chota";
  import { onMount, onDestroy } from "svelte";
  import {
    fade,
    scale,
    fly,
    slide,
    draw,
    crossfade,
    blur
  } from "svelte/transition";
  import MarkUp from "../MarkUp";
  import Chat from "../../../components/HomePage/Chat/Chat.svelte";
  import AppBar from "../../../components/HomePage/AppBar/AppBar.svelte";
  import SearchBar from "../../../components/HomePage/SearchBar/SearchBar.svelte";
  import Messages from "../../../components/HomePage/Messages/Messages.svelte";
  import Profile from "../../../components/HomePage/Profile/Profile.svelte";
  import AddChat from "../../../components/HomePage/AddChat/AddChat.svelte";
  import GroupChat from "../../../components/HomePage/GroupChat/GroupChat.svelte";
  import screenStore from "../../Store/screen/screen.store.js";

  let type = "addChat";

  let unsubscribe;

  const setScreen = () => {
    unsubscribe = screenStore.subscribe(res => {
      type = res;
    });
  };

  onMount(() => {
    setScreen();
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<style>

</style>

<MarkUp>
  <div slot="chatList">
    {#if type === 'profile'}
      <div in:fly={{ y: 200, duration: 500 }} out:fade>
        <Profile />
      </div>
    {:else if type === 'addChat'}
      <div in:fly={{ y: 200, duration: 500 }} out:fade>
        <AddChat />
      </div>
    {:else if type === 'addGroup'}
      <div in:fly={{ y: 200, duration: 500 }} out:fade>
        <GroupChat />
      </div>
    {:else}
      <div in:fly={{ y: 200, duration: 500 }} out:fade>
        <Chat />
      </div>
    {/if}
  </div>
  <div slot="messages" style="overflow:auto">
    <Messages />
  </div>
</MarkUp>
