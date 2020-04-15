<script>
  import Router from "./Router";
  import { authStore } from "./Store/auth/auth.store.js";

  const token = localStorage.getItem("token");

  const unubscribe = authStore.update(auth => {
    return {
      auth: token ? true : false,
      user: null
    };
  });
</script>

<Router />
