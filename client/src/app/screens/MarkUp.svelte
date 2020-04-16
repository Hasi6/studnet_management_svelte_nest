<script>
  import { Link, navigate } from "svelte-routing";
  import { onMount, onDestroy } from "svelte";
  import authStore from "../Store/auth/auth.store";

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
</script>

<nav>
  <Link to="/">Home</Link>
  <Link to="login">Login</Link>
  <Link to="register">Register</Link>
  <buuton class="btn btn-warning" on:click={() => logoutUser()}>Logout</buuton>
  <slot name="content" />
  {JSON.stringify(authenticated)}
</nav>
