<script>
  import { onDestroy, onMount } from "svelte";
  import chatStore from "../../../app/Store/chat/chat.store.js";
  import Users from "./Users/Users.svelte";
  import SelectedUsers from "./SelectedUsers/SelectedUsers.svelte";
  import SearchBar from "../../HomePage/SearchBar/SearchBar.svelte";

  export let setType;

  let unsubscribe;
  let chatList = [];

  let selectedUsers = [];

  const getChatList = () => {
    unsubscribe = chatStore.subscribe(chat => {
      chatList = chatList;
    });
  };

  const setSelectedUsers = user => {
    selectedUsers = [...selectedUsers, user];
  };

  const removeSelectedUsers = user => {
    selectedUsers = selectedUsers.filter(u => u !== user);
  };

  onMount(() => {
    getChatList();
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<style>
  .groupChat {
    text-align: center;
    height: 600px;
  }
</style>

<i
  class="fas fa-arrow-left"
  style="cursor:pointer"
  on:click={() => setType('addChat')} />
<div class="groupChat">
  <h1>Add Group Chat</h1>
  <SearchBar />
  <SelectedUsers {selectedUsers} {removeSelectedUsers} />
  <Users {setSelectedUsers} />
</div>
