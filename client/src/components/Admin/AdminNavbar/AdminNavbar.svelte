<script>
  import { Link } from "svelte-routing";

  const navList = [
    { path: "addFaculty", lable: "Add Faculty" },
    { path: "addDepartment", lable: "Add Department" }
  ];
</script>

<nav class="main-nav">
  <img src="https://i.ibb.co/wwLhz98/logo.png" alt="Microsoft" class="logo" />

  <ul class="main-menu">
    {#each navList as list}
      <li>
        <Link to={list.path}>{list.lable}</Link>
      </li>
    {/each}

  </ul>
</nav>
