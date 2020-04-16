<script>
  import { onMount, onDestroy } from "svelte";
  import { navigate } from "svelte-routing";
  import authStore from "../../Store/auth/auth.store";

  let authenticated;

  // Check User Auth
  let unsubscribe;
  const checkUserAuth = () => {
    unsubscribe = authStore.subscribe(auth => {
      authenticated = auth;
      if (authenticated.auth) {
        navigate("/", { replace: true });
      }
    });
  };

  onMount(() => {
    checkUserAuth();
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div>
  <slot name="content" />
</div>
