<script>
  import Router from "./Router";
  import authStore from "./Store/auth/auth.store.js";

  const token = localStorage.getItem("token");

  const unubscribe = authStore.checkAuthState();
</script>

<Router />
