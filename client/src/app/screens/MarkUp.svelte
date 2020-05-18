<script>
  import { Link, navigate } from "svelte-routing";
  import { onMount, onDestroy } from "svelte";
  import authStore from "../Store/auth/auth.store";
  import errorStore from "../Store/errors/errors.store.js";
  import { Row, Col, Button } from "svelte-chota";
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

{#if authenticated && authenticated.auth}
  <Row>
    <Col size="4" sizeMD="4" sizeLG="4" sizeSM="4" sizeXS="4">

      <slot name="chatList" />

    </Col>
    <Col size="8" sizeMD="8" sizeLG="8" sizeSM="8" sizeXS="8">
      <slot name="messages" />
    </Col>
  </Row>
{/if}

<Button
  class="btn btn-success"
  on:click={() => errorStore.addErrors({ msg: 'Hasi', type: 'success' })}>
  Add Error
</Button>
