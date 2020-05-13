<script>
  import { onMount, onDestroy } from "svelte";
  import { Card, Icon } from "svelte-chota";
  import SingleUser from "./SingleUser.svelte";
  import { mdiLanguageJavascript, mdiLoading } from "@mdi/js";

  export let setSelectedUsers;
  export let chatList;

  onMount(() => {});

  onDestroy(() => {});
</script>

<Card style="height: 350px; overflow:auto">

  {#if chatList}
    {#await $chatList}
      <div style="text-align:center">
        <Icon src={mdiLoading} color="orange" spin="0.5" size="3" />
      </div>
    {:then result}
      {#each result.data.searchUser as chat}
        <SingleUser {setSelectedUsers} {chat} />
      {/each}

    {:catch error}
      {error.message}
    {/await}
  {/if}

</Card>
