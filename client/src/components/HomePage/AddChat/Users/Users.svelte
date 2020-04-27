<script>
  import { onMount, onDestroy } from "svelte";
  import { Card } from "svelte-chota";
  import SingleUser from "./SingleUser.svelte";

  export let users;

  let unsubscribe;
  let chats = [];

  onMount(() => {});

  onDestroy(() => {});
</script>

<Card style="height: 350px; overflow:auto">
  {#await $users}
    Loading....
  {:then result}
    {JSON.stringify(users)}
  {:catch error}
    {error.message}
  {/await}
</Card>
