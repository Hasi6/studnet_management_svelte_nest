<script>
  import { onMount, onDestroy } from "svelte";
  import { Card } from "svelte-chota";
  import SingleUser from "./SingleUser.svelte";

  let unsubscribe;
  let chats = [];

  onMount(() => {});

  onDestroy(() => {});
</script>

<Card style="height: 500px; overflow:auto">
  <SingleUser />
  <SingleUser />
  <SingleUser />
  <SingleUser />
  <SingleUser />
  <SingleUser />
  <SingleUser />
</Card>
