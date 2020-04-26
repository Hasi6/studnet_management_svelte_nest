<script>
  import SearchBar from "./SearchBar/SearchBar.svelte";
  import Users from "./Users/Users.svelte";
  export let setType;
</script>

<style>
  .addChat {
    text-align: center;
    height: 600px;
  }
</style>

<i
  class="fas fa-arrow-left"
  style="cursor:pointer"
  on:click={() => setType('chat')} />
<div class="addChat">
  <h1>Add Chat</h1>
  <SearchBar />
  <Users />
</div>
