<script>
  import { Row, Col } from "svelte-chota";
  export let selectedUsers;

  $: console.log(selectedUsers);
</script>

<style>

</style>

<Row>
  {#each selectedUsers as user}
    <Col size="2">

      <img src={user} style="width:10px" alt="image" />
    </Col>
  {/each}
</Row>
