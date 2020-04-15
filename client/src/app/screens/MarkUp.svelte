<script>
  import { Link, navigate } from "svelte-routing";
  import { onMount, onDestroy } from "svelte";
  import { authStore } from "../Store/auth/auth.store";

  let authenticated;

  // Check User Auth
  let unsubscribe;
  const checkUserAuth = () => {
    unsubscribe = authStore.subscribe(auth => {
      authenticated = auth;
    });
    if (!authenticated.auth) {
      navigate("/login", { replace: true });
    }
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
  <slot name="content" />
</nav>
