<script>
  import { Input, Button, Nav, Tag } from "svelte-chota";
  import { mdiDotsHorizontal } from "@mdi/js";
  import authStore from "../../../app/Store/auth/auth.store.js";
  export let setType;
</script>

<style>
  img {
    border-radius: 50%;
    cursor: pointer;
  }
  p {
    cursor: pointer;
  }
</style>

<div>
  <Nav class="navbar">
    <img
      slot="left"
      src="https://avatars0.githubusercontent.com/u/37216970?s=460&u=f5293b88d23b3694aa76b7149ce28480cbe2912e&v=4"
      alt="userimage"
      on:click={() => setType('profile')} />

    <p slot="right" on:click={() => setType('addChat')}>
      <i class="fas fa-plus" style="cursor:pointer" />
    </p>
    <a slot="right" href="/" style="z-index:1000">
      <Button
        style="border:none; z-index:100!important"
        dropdown=""
        autoclose
        outline
        iconRight={mdiDotsHorizontal}>
        <p>Profile</p>
        <p>Settings</p>
        <hr />
        <p on:click={() => authStore.logOutUser()}>Logout</p>
      </Button>
    </a>
  </Nav>
</div>
