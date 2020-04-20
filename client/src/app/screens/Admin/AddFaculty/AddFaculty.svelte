<script>
  import axios from "axios";
  import AdminMarkUp from "../AdminMarkUp";
  import errorStore from "../../../Store/errors/errors.store";
  import { endPoint } from "../../../../config";

  const token = localStorage.getItem("token");

  let disabled = true;

  let name = "";

  let header = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };

  $: disabled = name.length > 4 && name.length < 50 ? false : true;

  // Add Faculty
  const addFaculty = async () => {
    try {
      const { data, status } = await axios.post(
        `${endPoint}/api/faculties`,
        { name },
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
      <h1>Add Faculty</h1>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
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
        on:click|preventDefault={() => addFaculty()}>
        Submit
      </button>
    </div>
  </div>
</AdminMarkUp>
