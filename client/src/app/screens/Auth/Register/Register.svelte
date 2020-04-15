<script>
  import UnAuthProtect from "../UnAuthProtect.svelte";
  import { validateEmail } from "../../../helpers/emailValidator.js";
  import { Link } from "svelte-routing";
  import { aplloClient } from "../../../Store/graphql/grqphQlClient.js";
  import { setClient, getClient, query, mutate } from "svelte-apollo";
  import ApolloClient, { gql } from "apollo-boost";
  const client = new ApolloClient({ uri: "http://localhost:5000/graphql" });
  setClient(client);

  const getFaculties = gql`
    {
      faculties {
        name
      }
    }
  `;

  const getCliet = getClient();
  const faculties = query(getCliet, { query: getFaculties });

  let username = "";
  let email = "";
  let password = "";
  let confirmPassword;
  let faculty;

  $: console.log(faculty);

  $: (() => {
    if (password !== confirmPassword) {
    }
  })();
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

{#await $faculties}
  Loading....
{:then result}
  {JSON.stringify(result)}
{:catch error}
  {error.message}
{/await}
<UnAuthProtect>
  <div slot="content" class="container login_form">
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Username</label>
          <input type="text" class="form-control" placeholder="Username" />
        </div>
        <div class="form-group col-md-6">
          <label>Faculty</label>

          <select
            class="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            bind:value={faculty}>

            {#await $faculties}
              Loading....
            {:then result}
              {#each result.data.faculties as faculty}
                <option value={faculty.name}>{faculty.name}</option>
              {/each}
            {:catch error}
              {error.message}
            {/await}
          </select>
        </div>
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
    </form>
    <button class="btn btn-success">Submit</button>
    <br />

    <span>
      Don't Have an Account?
      <Link to="register">Register Here</Link>
    </span>

  </div>
</UnAuthProtect>
