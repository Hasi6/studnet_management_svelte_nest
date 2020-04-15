<script>
  import UnAuthProtect from "../UnAuthProtect.svelte";

  let username;
  let email;
  let password;
  let confirmPassword;

  $: (() => {
    alert("Test");
    if (password !== confirmPassword) {
      alert("Hasi");
    }
  })();
</script>

<style>

</style>

<UnAuthProtect>
  <div slot="content" class="container">
    <h1>Login</h1>
  </div>
</UnAuthProtect>
