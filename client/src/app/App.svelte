<script>
  import Router from "./Router";
  import authStore from "./Store/auth/auth.store.js";
  import Errors from "../components/Errors/Errors.svelte";
  // import { Input, Button } from "svelte-chota";
  import { Card, Button, Image } from "smelte";

  const token = localStorage.getItem("token");

  const unubscribe = authStore.checkAuthState();
</script>

<style>
  @import "https://unpkg.com/chota@latest";
  @import "smelte/src/tailwind.css";
</style>

<div class="container">
  <Errors />
  <Router />
</div>
