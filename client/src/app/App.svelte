<script>
  import Router from "./Router";
  import authStore from "./Store/auth/auth.store.js";
  import Errors from "../components/Errors/Errors.svelte";
  import { Card } from "svelte-chota";

  const token = localStorage.getItem("token");

  const unubscribe = authStore.checkAuthState();
</script>

<style>
  @import "https://unpkg.com/chota@latest";
  @import "smelte/src/tailwind.css";
  .container {
    margin-top: 10px;
    background: darkgray;
  }
</style>

<div class="container">
  <Card>
    <Errors />
    <Router />
  </Card>
</div>
