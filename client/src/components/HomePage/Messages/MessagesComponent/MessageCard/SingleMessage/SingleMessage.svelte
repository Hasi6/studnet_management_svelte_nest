<script>
  import { Card, Button, Tag } from "svelte-chota";
  import { onMount, onDestroy } from "svelte";
  import { mdiChevronDown } from "@mdi/js";
  import authStore from "../../../../../../app/Store/auth/auth.store.js";
  export let message;

  console.log(message);

  let unsubscribe;
  let user;
  let isMe;

  onMount(() => {
    unsubscribe = authStore.subscribe(res => {
      user = res.user;
    });

    isMe = message.sender === user._id ? true : false;
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<style>
  .message {
    display: flex;
  }
</style>

<Card
  style={isMe ? 'max-width: 400px; background:darkgreen;  margin-bottom: 15px; position:relative; left:200px' : 'max-width: 400px; margin-bottom: 15px'}>

  <div class="message">

    {#if message.message}
      <p style="width:auto">{message.message}</p>
    {/if}
    {#if message.image}
      <img src={message.image} alt="image" />
    {/if}
    <Button
      dropdown=""
      autoclose
      outline
      iconRight={mdiChevronDown}
      style="float:right; border:none">
      <p>Delete from Me</p>
      <p>Delete From All</p>
    </Button>
  </div>
  <div>
    <p style="width:auto">Time</p>
    {#if isMe}
      <div style="float:right">
        <i class="fas fa-check" />
        <i class="fas fa-check" />
      </div>
    {/if}
  </div>
</Card>
