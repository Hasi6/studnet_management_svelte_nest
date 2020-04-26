<script>
  import { Input, Button, Nav, Tag } from "svelte-chota";
  import { mdiDotsHorizontal } from "@mdi/js";
</script>

<style>
  img {
    border-radius: 50%;
  }
</style>

<div>
  <Nav class="navbar">
    <img
      slot="left"
      src="https://avatars0.githubusercontent.com/u/37216970?s=460&u=f5293b88d23b3694aa76b7149ce28480cbe2912e&v=4"
      alt="userimage" />

    <a slot="right" href="/">
      <i class="fas fa-plus" />
    </a>
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
</div>
