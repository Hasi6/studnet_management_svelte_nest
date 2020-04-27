<script>
  import { Input, Field, Button, Card } from "svelte-chota";
  import { v4 as uuid } from "uuid";

  export let user;

  let name =
    "Hasis;hf;al gh fa;slgf a;sga; .ksfvafsk. vfas.kf hv ask.fhv.asfhv";
</script>

<style>
  img {
    width: 50px !important;
    height: 50px;
    border-radius: 50%;
    margin-top: 5px;
  }
  .singleChat {
    display: flex;
    justify-content: space-between;
  }
</style>

<Card
  style="margin-bottom: 10px; cursor:pointer"
  on:click={() => {
    alert();
  }}>
  <div class="singleChat">
    <div style="flex: 1">
      <img src={user.image} alt={user.username} />
    </div>
    <div style="flex:2">
      <p>{user.username}</p>
      <p>{user.email.substr(0, 10)}{user.email.length > 10 ? '...' : ''}</p>
    </div>
    <div style="flex:1">
      <p>Typing...</p>
    </div>
  </div>
</Card>
