<script>
  import { Input, Button, Nav, Tag, Field } from "svelte-chota";
  import { mdiDotsHorizontal } from "@mdi/js";
  export let searchKey;
  export let setSearchKey;

  setTimeout(() => {
    setSearchKey("Hasi123");
  }, 5000);
</script>

<style>
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
</style>

<Nav class="navbar">
  <img
    slot="left"
    style="height:100px"
    src="https://avatars0.githubusercontent.com/u/37216970?s=460&u=f5293b88d23b3694aa76b7149ce28480cbe2912e&v=4"
    alt="userimage" />

  <p slot="right">
    <Field gapless>

      <Input
        placeholder="Search Messages"
        on:input={e => setSearchKey(e.target.value)} />

    </Field>
  </p>
  <a slot="right" href="/">
    <Button
      style="border:none; z-index:100!important"
      dropdown=""
      autoclose
      outline
      iconRight={mdiDotsHorizontal}>
      <p>Profile</p>
      <p>Settings</p>
      <hr />
      <p>Logout</p>
    </Button>
  </a>
</Nav>
{searchKey}
