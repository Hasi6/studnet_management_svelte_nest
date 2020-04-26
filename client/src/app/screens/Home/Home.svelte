<script>
  import { Card } from "svelte-chota";
  import MarkUp from "../MarkUp";
  import Chat from "../../../components/HomePage/Chat/Chat.svelte";
  import AppBar from "../../../components/HomePage/AppBar/AppBar.svelte";
  import SearchBar from "../../../components/HomePage/SearchBar/SearchBar.svelte";
  import Messages from "../../../components/HomePage/Messages/Messages.svelte";
  import Profile from "../../../components/HomePage/Profile/Profile.svelte";

  let profile = false;

  const setProfile = arg => {
    profile = arg;
  };
</script>

<style>

</style>

<MarkUp>
  <div slot="chatList">
    {#if profile}
      <Profile {setProfile} />
    {:else}
      <Chat {setProfile} />
    {/if}
  </div>
  <div slot="messages" style="overflow:auto">
    <Messages />
  </div>
</MarkUp>
