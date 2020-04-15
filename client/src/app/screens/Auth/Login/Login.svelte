<script>
  import UnAuthProtect from "../UnAuthProtect.svelte";
  import { validateEmail } from "../../../helpers/emailValidator.js";

  let email = "";
  let password = "";
  let test = "";
  let disabled = true;
  let errors = [];

  $: (() => {
    if (validateEmail(email) && password.length >= 6) {
      disabled = false;
    } else {
      disabled = true;
    }
  })();

  const submit = () => {
    if (validateEmail(email) && password.length >= 6) {
      alert("Valid");
    } else {
      console.log("Hasi");
      errors = [...errors, { msg: "Invalid Inputs" }];
    }
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
  <div slot="content" class="container login_form">
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
    <button
      {disabled}
      class="btn btn-success"
      on:click|preventDefault={() => submit()}>
      Submit
    </button>
  </div>

  {#each errors as error}
    Hasi
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>{error.msg}</strong>
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  {/each}
</UnAuthProtect>
