<script>
  import UnAuthProtect from "../UnAuthProtect.svelte";
  import { validateEmail } from "../../../helpers/emailValidator.js";
  import { Link } from "svelte-routing";
  import { setClient, getClient, query, mutate } from "svelte-apollo";
  import { client } from "../../../helpers/apolloClient.js";
  import { getFaculties } from "../../../graphql/queries/getFaculties.query.js";
  import { getDepartments } from "../../../graphql/mutations/getDepartments.mutation.js";
  setClient(client);

  const getCliet = getClient();
  const faculties = query(getCliet, { query: getFaculties });

  let username = "";
  let email = "";
  let password = "";
  let confirmPassword;
  let faculty;
  let departments = [];
  let department;

  $: (async () => {
    try {
      const res = await mutate(client, {
        mutation: getDepartments,
        variables: { facultyId: faculty }
      });
      if (res && res.data && res.data.departments) {
        departments = res.data.departments;
      }
    } catch (err) {
      console.log(err.message);
    }
  })();

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
      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Faculty</label>

          <select
            class="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            bind:value={faculty}>
            <option value={null}>Select Faculty</option>

            {#await $faculties}
              Loading....
            {:then result}
              {#each result.data.faculties as faculty}
                <option value={faculty._id}>{faculty.name}</option>
              {/each}
            {:catch error}
              {error.message}
            {/await}
          </select>
        </div>
        <div class="form-group col-md-6">
          <label>Department</label>

          <select
            class="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            bind:value={faculty}>

            {#each departments as department}
              <option value={department.name}>{department.name}</option>
            {/each}

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
