<script>
  import { Link, navigate } from "svelte-routing";
  import { onMount, onDestroy } from "svelte";
  import authStore from "../Store/auth/auth.store";
  import errorStore from "../Store/errors/errors.store.js";
  import { Sidepanel, Button, ButtonGroup } from "svelte-mui";
  export let rightVisible = true;

  let authenticated;

  // Check User Auth
  let unsubscribe;
  const checkUserAuth = () => {
    unsubscribe = authStore.subscribe(auth => {
      authenticated = auth;
      if (authenticated.auth === false) {
        navigate("/login", { replace: true });
      }
    });
  };

  const logoutUser = async () => {
    authStore.logOutUser();
  };

  onMount(() => {
    checkUserAuth();
  });

  onDestroy(() => {
    unsubscribe();
  });

  const setRightVisible = () => {
    rightVisible = !rightVisible;
  };
</script>

<button
  class="btn btn-success"
  on:click={() => errorStore.addErrors({ msg: 'Hasi', type: 'success' })}>
  Add Error
</button>

{#if authenticated && authenticated.auth}
  <nav>
    <Link to="/">Home</Link>
    <Link to="login">Login</Link>
    <Link to="register">Register</Link>
    <button class="btn btn-warning" on:click={() => logoutUser()}>
      Logout
    </button>
    <button class="btn btn-primary" on:click={setRightVisible}>Click</button>
    <slot name="content" />
    {JSON.stringify(authenticated)}
  </nav>
  <Sidepanel right bind:visible={rightVisible}>
    <div class="logo" style="padding-left: 1rem;">Help</div>
    <p>
      <i style="padding: 12px;">Blank</i>
    </p>
  </Sidepanel>
{/if}
