<script>
  import Router from "./Router";
  import authStore from "./Store/auth/auth.store.js";
  import Errors from "../components/Errors/Errors.svelte";

  const token = localStorage.getItem("token");

  const unubscribe = authStore.checkAuthState();
</script>

<div class="container">
  <Errors />
  <Router />
</div>
