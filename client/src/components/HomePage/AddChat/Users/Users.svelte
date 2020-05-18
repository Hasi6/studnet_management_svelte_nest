<script>
  import { onMount, onDestroy } from "svelte";
  import { Card, Icon } from "svelte-chota";
  import { mdiLanguageJavascript, mdiLoading } from "@mdi/js";
  import SingleUser from "./SingleUser.svelte";
  import { setClient, getClient, query, mutate } from "svelte-apollo";
  import { client } from "../../../../app/helpers/apolloClient.js";
  import { getUsers } from "../../../../app/graphql/queries/getUsers.query.js";

  let users;
  export let searchKey;
  const getCliet = getClient();

  $: if (searchKey.length > 2) {
    users = query(getCliet, {
      query: getUsers,
      variables: { searchKey }
    });
  }

  $: if (searchKey.length < 2) {
    users = undefined;
  }

  onMount(() => {});

  onDestroy(() => {});
</script>

<Card style="height: 350px; overflow:auto">
  {#await $users}
    <div style="text-align:center">
      <Icon src={mdiLoading} color="orange" spin="0.5" size="3" />
    </div>
  {:then result}
    {#if searchKey.length > 2}
      {#if result.data.searchUser.length === 0}No Users Found{/if}
      {#each result.data.searchUser as user}
        <SingleUser {user} />
      {/each}
    {/if}
  {:catch error}
    {error.message}
  {/await}
</Card>
