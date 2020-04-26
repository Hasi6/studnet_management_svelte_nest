<script>
  import { Card } from "svelte-chota";
  export let isMe;
</script>

<style>

</style>

<Card
  style={isMe ? 'max-width: 400px; background:darkgreen;  margin-bottom: 15px; position:relative; left:200px' : 'max-width: 400px; margin-bottom: 15px'}>
  <p style="width:auto">
    Hey Tiro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
    sapiente suscipit natus sed illum, corporis facilis porro eos dolores neque
    obcaecati voluptatibus itaque nemo voluptates nostrum cupiditate ex at
    blanditiis.
  </p>
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
