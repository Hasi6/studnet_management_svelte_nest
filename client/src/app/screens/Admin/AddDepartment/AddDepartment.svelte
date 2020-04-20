<script>
  import axios from "axios";
  import { setClient, getClient, query } from "svelte-apollo";
  import { client } from "../../../helpers/apolloClient.js";
  import { getFaculties } from "../../../graphql/queries/getFaculties.query.js";
  import { getDepartments } from "../../../graphql/mutations/getDepartments.mutation.js";

  import AdminMarkUp from "../AdminMarkUp";
  import errorStore from "../../../Store/errors/errors.store";
  import { endPoint } from "../../../../config";

  setClient(client);

  const getCliet = getClient();
  const faculties = query(getCliet, { query: getFaculties });

  const token = localStorage.getItem("token");

  let disabled = true;
  let facultyId = "";
  let name = "";

  let header = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };

  $: disabled = name.length > 4 && name.length < 50 && facultyId ? false : true;

  $: console.log(facultyId);

  // Add Department
  const addDepartment = async () => {
    try {
      const { data, status } = await axios.post(
        `${endPoint}/api/department`,
        { name, facultyId },
        header
      );

      errorStore.addErrors({ msg: "Department added", type: "success" });
      name = "";
    } catch (err) {
      console.log(err.response);
      const errors = err.response.data;
      errorStore.addErrors({ msg: errors.message, type: "danger" });
    }
  };
</script>

<style>
  .alert {
    background: none;
    border: none;
  }
  .mainDiv {
    text-align: center;
  }
  form {
    width: 50%;
    margin: auto;
  }
</style>

<AdminMarkUp>
  <div slot="content">
    <div class="mainDiv">
      <h1>Add Department</h1>
      <form>
        <div class="form-group">
          <label>Faculty</label>

          <select
            class="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            bind:value={facultyId}>
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
        <div class="form-group">
          <label for="exampleInputEmail1">Department Name</label>
          <input
            type="text"
            class="form-control"
            bind:value={name}
            placeholder="Faculty Name" />
          {#if (name.length <= 4 || name.length > 50) && name !== ''}
            <div class="alert alert-danger">
              Faculty name must be 4 to 50 characters
            </div>
          {/if}

        </div>
      </form>
      <button
        {disabled}
        class="btn btn-success"
        on:click|preventDefault={() => addDepartment()}>
        Submit
      </button>
    </div>
  </div>
</AdminMarkUp>
