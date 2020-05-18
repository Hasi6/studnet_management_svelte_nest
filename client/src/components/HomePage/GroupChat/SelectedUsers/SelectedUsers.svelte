<script>
  import { Row, Col, Button, Input, Field } from "svelte-chota";
  import {
    fade,
    scale,
    fly,
    slide,
    draw,
    crossfade,
    blur
  } from "svelte/transition";
  import { mdiDelete, mdiSend } from "@mdi/js";
  export let selectedUsers;
  export let removeSelectedUsers;

  $: console.log(selectedUsers);
</script>

<style>

</style>

{#if selectedUsers.length > 0}
  <br />
  <div in:fly={{ y: 200, duration: 500 }} out:fade>
    <Field gapless>
      <Input placeholder="Group Name" />
      <Button icon={mdiSend} success />
    </Field>
  </div>
{/if}

<Row>
  {#each selectedUsers as user}
    <Col size="4">
      <div transition:scale>

        <img src={user} style="width:50px" alt="image" />
        <Button icon={mdiDelete} on:click={() => removeSelectedUsers(user)} />
      </div>
    </Col>
  {/each}
</Row>
