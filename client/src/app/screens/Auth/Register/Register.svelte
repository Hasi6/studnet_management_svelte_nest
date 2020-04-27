<script>
  import { Link } from "svelte-routing";
  import { setClient, getClient, query, mutate } from "svelte-apollo";
  import { Button } from "svelte-chota";
  import UnAuthProtect from "../UnAuthProtect.svelte";
  import { validateEmail } from "../../../helpers/emailValidator.js";
  import { client } from "../../../helpers/apolloClient.js";
  import { getFaculties } from "../../../graphql/queries/getFaculties.query.js";
  import { getDepartments } from "../../../graphql/mutations/getDepartments.mutation.js";
  import authStore from "../../../Store/auth/auth.store.js";
  import errorStore from "../../../Store/errors/errors.store.js";
  setClient(client);

  const getCliet = getClient();
  const faculties = query(getCliet, { query: getFaculties });

  let username = "";
  let email = "";
  let password = "";
  let confirmPassword = "";
  let disabled = true;

  $: (async () => {
    try {
      const res = await mutate(client, {
        mutation: getDepartments,
        variables: { facultyId: "faculty" }
      });
      if (res && res.data && res.data.departments) {
        departments = res.data.departments;
      }
    } catch (err) {
      console.log(err.message);
    }
  })();

  // $: (() => {
  //   if (password !== confirmPassword) {
  //   }
  // })();

  $: disabled =
    password &&
    password.length > 6 &&
    confirmPassword &&
    confirmPassword.length > 4 &&
    password === confirmPassword &&
    email &&
    username
      ? false
      : true;

  const submit = e => {
    e.preventDefault();

    const body = {
      username,
      email,
      password
    };

    authStore.registerUser(body);
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
        <label>Username</label>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          bind:value={username} />
        {#if (username && username.length < 4) || username.length > 12}
          <div class="alert alert-danger">
            username should be 4 to 12 characters
          </div>
        {/if}

      </div>

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
      <div class="form-group">
        <label for="exampleInputPassword1">Confirm Password</label>
        <input
          type="password"
          bind:value={confirmPassword}
          class="form-control"
          placeholder="Confirm Password" />
        {#if confirmPassword.length < 6 && confirmPassword !== ''}
          <div class="alert alert-danger">
            {'Password mu be 6 or more characters'}
          </div>
        {:else if password !== confirmPassword && password && confirmPassword}
          <div class="alert alert-danger">
            {'Password and confirm password did not matched'}
          </div>
        {/if}
      </div>
    </form>
    <Button success {disabled} on:click={e => submit(e)}>Register</Button>
    <br />

    <span>
      Already Have an Account?
      <Link to="login">Register Here</Link>
    </span>

  </div>
</UnAuthProtect>
