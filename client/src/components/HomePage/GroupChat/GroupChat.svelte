<script>
  export let setType;
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
  on:click={() => setType('addChat')} />
<div class="groupChat">
  <h1>Add Group Chat</h1>
</div>
