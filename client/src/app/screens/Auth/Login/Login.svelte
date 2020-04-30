<script>
  import { onDestroy, onMount } from "svelte";
  import UnAuthProtect from "../UnAuthProtect.svelte";
  import { Input, Button } from "svelte-chota";
  import { Link } from "svelte-routing";
  import { validateEmail } from "../../../helpers/emailValidator.js";
  import axios from "axios";
  import { endPoint } from "../../../../config";
  import authStore from "../../../Store/auth/auth.store.js";
  import loadingStore from "../../../Store/loading/loading.store.js";
  import alertToaster from "simple_alert_toaster";

  let email = "";
  let password = "";
  let test = "";
  let disabled = true;
  let errorss = [];
  let loading = false;

  let loadingUnsubscribe;

  $: console.log(loading);

  // $: setInterval(() => {
  //   alertToaster("test", "test", "success");
  // }, 1000);

  onMount(() => {
    loadingUnsubscribe = loadingStore.subscribe(loginLoading => {
      console.log(loginLoading);
      loading = loginLoading.name === "login" ? true : false;
    });
  });

  onDestroy(() => {
    loadingUnsubscribe();
  });

  $: (() => {
    if (validateEmail(email) && password.length >= 6) {
      disabled = false;
    } else {
      disabled = true;
    }
  })();

  const submit = (e, loading) => {
    e.preventDefault();
    loadingStore.setLoading("login");
    loading = true;
    authStore.loginUser({ email, password });
  };
</script>

<style>
  .login_form {
    margin: auto;
    width: 50%;
    padding: 10% 0;
  }
  .form-group .alert {
    background: none;
    border: none;
    color: darkred;
  }
</style>

<UnAuthProtect>
  <div slot="content" class="container login_form ">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          bind:value={email}
          placeholder="Email Address" />
        {#if !validateEmail(email) && email !== ''}
          <div class="alert alert-danger">{email} is Not an Email Address</div>
        {/if}

      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          bind:value={password}
          class="form-control"
          placeholder="Password" />
        {#if password.length < 6 && password !== ''}
          <div class="alert alert-danger">
            {'Password mu be 6 or more characters'}
          </div>
        {/if}
      </div>
    </form>

    <Button on:click={e => submit(e)} primary {disabled} {loading}>
      Submit
    </Button>
    <br />

    <span>
      Don't Have an Account?
      <Link to="register">Register Here</Link>
    </span>

  </div>

</UnAuthProtect>
