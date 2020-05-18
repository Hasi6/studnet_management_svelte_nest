<script>
  import { setClient, getClient, query, mutate } from "svelte-apollo";
  import SearchBar from "./SearchBar/SearchBar.svelte";
  import Users from "./Users/Users.svelte";
  import GroupChat from "./GroupChat/GroupChat.svelte";
  import { client } from "../../../app/helpers/apolloClient.js";
  import { getUsers } from "../../../app/graphql/queries/getUsers.query.js";
  import screenStore from "../../../app/Store/screen/screen.store.js";

  setClient(client);

  const getCliet = getClient();

  let users = [];

  let searchKey = "";

  $: if (searchKey) {
    users = query(getCliet, {
      query: getUsers,
      variables: { searchKey }
    });
  }

  const setSearchKey = key => {
    searchKey = key;
  };
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
  on:click={() => screenStore.setScreen('chat')} />
<div class="addChat">
  <h1>Add Chat</h1>
  <SearchBar {setSearchKey} />
  <hr />
  <GroupChat />
  <hr />

  <Users {searchKey} />
</div>
