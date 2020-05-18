<script>
  import { Input, Button, Nav, Tag } from "svelte-chota";
  import { onMount, onDestroy } from "svelte";
  import { mdiDotsHorizontal } from "@mdi/js";
  import authStore from "../../../app/Store/auth/auth.store.js";
  import screenStore from "../../../app/Store/screen/screen.store";

  let authUnsubscribe;
  let user;

  const setState = () => {
    authUnsubscribe = authStore.subscribe(res => {
      user = res.user;
    });
  };

  onMount(() => {
    setState();
  });

  onDestroy(() => {
    authUnsubscribe();
  });
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
    <div slot="left">
      {#if user}
        <img
          src={user.image}
          alt="userimage"
          on:click={() => screenStore.setScreen('profile')} />
      {/if}
    </div>

    <p slot="right" on:click={() => screenStore.setScreen('addChat')}>
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
