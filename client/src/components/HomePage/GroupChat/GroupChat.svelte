<script>
  import { onDestroy, onMount } from "svelte";
  import { setClient, getClient, query, mutate } from "svelte-apollo";
  import chatStore from "../../../app/Store/chat/chat.store.js";
  import Users from "./Users/Users.svelte";
  import SelectedUsers from "./SelectedUsers/SelectedUsers.svelte";
  import SearchBar from "../../HomePage/SearchBar/SearchBar.svelte";
  import screenStore from "../../../app/Store/screen/screen.store.js";
  import { getUsers } from "../../../app/graphql/queries/getUsers.query.js";
  import { client } from "../../../app/helpers/apolloClient.js";

  let unsubscribe;
  let chatList;
  let searchKey;

  setClient(client);

  const getCliet = getClient();

  let selectedUsers = [];

  const getChatList = () => {
    unsubscribe = chatStore.subscribe(chat => {
      // chatList = chat;
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

  $: if (searchKey) {
    chatList = query(getCliet, {
      query: getUsers,
      variables: { searchKey }
    });
  }

  const searchChats = e => {
    searchKey = e;
  };
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
  on:click={() => screenStore.setScreen('addChat')} />
<div class="groupChat">
  <h1>Add Group Chat</h1>
  <SearchBar {searchChats} />
  <SelectedUsers {selectedUsers} {removeSelectedUsers} />
  <Users {setSelectedUsers} {chatList} />
</div>
