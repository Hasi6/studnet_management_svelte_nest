<script>
  import { Input, Field, Button, Card } from "svelte-chota";
  import { v4 as uuid } from "uuid";

  export let setType;

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
    setType('addGroup');
  }}>
  <div class="singleChat">
    <img
      src="https://avatars1.githubusercontent.com/u/37216970?s=88&u=f5293b88d23b3694aa76b7149ce28480cbe2912e&v=4"
      alt="" />
    <h5>Create Group Chat</h5>
  </div>
</Card>
