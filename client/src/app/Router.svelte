<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./screens/Home/Home.svelte";
  import Login from "./screens/Auth/Login/Login.svelte";
  import Register from "./screens/Auth/Register/Register.svelte";
  import Admin from "./screens/Admin/Admin.svelte";
  import AddFaculty from "./screens/Admin/AddFaculty/AddFaculty.svelte";

  export let url = "";
</script>

<Router {url}>
  <Route path="login" component={Login} />
  <Route path="register" component={Register} />
  <Route path="admin" component={Admin} />
  <Route path="addFaculty" component={AddFaculty} />
  <Route path="/">
    <Home />
  </Route>
</Router>
