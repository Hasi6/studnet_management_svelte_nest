<script>
  import { onDestroy, onMount } from "svelte";
  import screenStore from "../../../app/Store/screen/screen.store.js";
  import authStore from "../../../app/Store/auth/auth.store.js";
  import { Modal, ModalBody, ModalFooter, ModalHeader } from "sveltestrap";
  import { Input, Field, Button, Card } from "svelte-chota";
  import { mdiSend, mdiPlus } from "@mdi/js";
  import fileUploadFirebase from "firebase_fileupload";
  import { storage } from "../../../config/firebase.js";

  let user;
  let unsubscribe;
  let loading = false;
  let image;
  const toggle = () => (open = !open);

  let open = false;

  const getState = () => {
    unsubscribe = authStore.subscribe(res => {
      console.log(res.user);
      user = res.user;
    });
  };

  const setErrors = error => {};

  const success = urls => {
    console.log(urls);
  };

  const setPercentage = percentage => {};

  const uploadImage = () => {
    fileUploadFirebase(
      storage,
      [image],
      "profileImages",
      setPercentage,
      success,
      setErrors
    );
  };

  onMount(() => {
    getState();
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<style>
  .profile {
    text-align: center;
    height: 600px;
    background: aqua;
  }
  .dropper {
    margin-top: 20px;
    height: 30vh;
    border: 2px dashed black;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  input {
    width: 100%;
    height: 30vh;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .dropper:hover {
    background: #eee;
  }
</style>

<i
  class="fas fa-arrow-left"
  style="cursor:pointer"
  on:click={() => screenStore.setScreen('chat')} />
<div class="profile">
  <h1>Profile</h1>
  {#if user}
    <img src={user.image} alt="my_profile" />
  {/if}
  <br />
  <i class="fas fa-edit" style="cursor:pointer" on:click={() => toggle()} />
</div>

<Modal isOpen={open} {toggle} style="margin-top:500px">
  <div style="text-align:center">
    <div class="dropper">
      <input
        type="file"
        on:change={e => {
          image = e.target.files[0];
        }}
        multiple={false}
        accept="image/*" />
      <span>Drag Files Here</span>

    </div>
    <Button
      success
      {loading}
      iconRight={mdiSend}
      style="margin:10px"
      on:click={() => uploadImage()}>
      Send
    </Button>
  </div>
</Modal>
