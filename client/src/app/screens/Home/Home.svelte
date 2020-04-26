<script>
  import { Card } from "svelte-chota";
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

  let type = "chat";

  const setType = arg => {
    type = arg;
  };
</script>

<style>

</style>

<MarkUp>
  <div slot="chatList">
    {#if type === 'profile'}
      <div in:fly={{ y: 200, duration: 500 }} out:fade>
        <Profile {setType} />
      </div>
    {:else if type === 'addChat'}
      <div in:fly={{ y: 200, duration: 500 }} out:fade>
        <AddChat {setType} />
      </div>
    {:else}
      <div in:fly={{ y: 200, duration: 500 }} out:fade>
        <Chat {setType} />
      </div>
    {/if}
  </div>
  <div slot="messages" style="overflow:auto">
    <Messages />
  </div>
</MarkUp>
