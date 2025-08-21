<script>
  import Fullpage from 'svelte-fullpage';
  import 'svelte-fullpage/dist/svelte-fullpage.css';
</script>

<Fullpage>
  <div class="section">
    <h1>Admin-Dashboard</h1>
    <p>A project to manage administrative tasks.</p>
  </div>
  <div class="section">
    <h1>Album-Inventory-Application</h1>
    <p>An application to manage an album inventory.</p>
  </div>
  <div class="section">
    <h1>Battleship</h1>
    <p>The classic game of Battleship.</p>
  </div>
  <div class="section">
    <h1>Blog-API</h1>
    <p>A RESTful API for a blog platform.</p>
  </div>
  <div class="section">
    <h1>Contact Me</h1>
    <p>Your contact information here.</p>
  </div>
</Fullpage>

<style>
  .section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
  }
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
</style>