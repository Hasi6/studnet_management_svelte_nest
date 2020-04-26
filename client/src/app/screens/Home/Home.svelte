<script>
  import MarkUp from "../MarkUp";
  import Chat from "../../../components/HomePage/Chat/Chat.svelte";
  import AppBar from "../../../components/HomePage/AppBar/AppBar.svelte";
  import SearchBar from "../../../components/HomePage/SearchBar/SearchBar.svelte";
</script>

<style>

</style>

<MarkUp>
  <div slot="chatList">
    <AppBar />
    <SearchBar />
    <Chat />
  </div>

</MarkUp>
