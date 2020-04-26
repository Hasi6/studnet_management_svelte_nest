<script>
  import { onMount, onDestroy } from "svelte";
  import { Card } from "svelte-chota";

  import SingleUser from "./SingleUser.svelte";

  export let setSelectedUsers;

  const data = [1, 2, 3, 4, 5, 6, 7];

  let unsubscribe;
  let chats = [];

  onMount(() => {});

  onDestroy(() => {});
</script>

<Card style="height: 350px; overflow:auto">
  {#each data as d}
    <SingleUser {setSelectedUsers} />
  {/each}

</Card>
