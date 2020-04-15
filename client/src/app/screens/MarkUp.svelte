<script>
  import { Link } from "svelte-routing";
</script>

<nav>
  <Link to="/">Home</Link>
  <Link to="login">Login</Link>
  <Link to="register">Register</Link>
  <slot name="content" />
</nav>
