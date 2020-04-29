<script>
  import { Input, Field, Button, Card } from "svelte-chota";
  import { onMount, onDestroy } from "svelte";
  import { Modal, ModalBody, ModalFooter, ModalHeader } from "sveltestrap";
  import EmojiSelector from "svelte-emoji-selector";
  import { mdiSend, mdiPlus } from "@mdi/js";
  import { Dialog, Textfield } from "svelte-mui";
  import chatStore from "../../../../../app/Store/chat/chat.store.js";
  import { apiRequests } from "../../../../../app/helpers/apiRequests.js";
  import { endPoint } from "../../../../../config";
  import { storage } from "../../../../../config/firebase.js";
  import fileUploadFirebase from "firebase_fileupload";
  // import { fileUploadFirebase } from "../../../../../app/helpers/fileUpload.firebase.js";
  import errorStore from "../../../../../app/Store/errors/errors.store.js";

  export let chatId;

  let chatList = [];
  let unsubscribe;
  let fullChatId;
  let image;
  let errors;
  let percentage;

  const setPercentage = pers => {
    percentage = pers;
  };

  $: console.log(percentage);

  const setErrors = err => {
    errorStore.addErrors({ msg: err, type: "danger" });
  };

  const success = urls => {
    console.log(urls);
    errorStore.addErrors({ msg: "File Uploaded", type: "success" });
  };

  let open = false;
  const toggle = () => (open = !open);

  export let visible = false;

  let message;

  const uploadImage = async () => {
    const res = await fileUploadFirebase(
      storage,
      [image],
      "test",
      setPercentage,
      success,
      setErrors
    );
    console.log(res);
  };

  const addEmoji = e => {
    message = `${message} ${e.detail}`;
  };

  const sendMessage = async () => {
    fullChatId = chatList.filter(chat => chat._id === chatId)[0].fullChatId;
    const body = {
      chatId,
      fullChatId,
      message
    };
    console.log(localStorage.getItem("token"));
    const res = await apiRequests(`${endPoint}/api/message`, "post", body, {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    });

    message = "";
  };

  const getChatList = () => {
    unsubscribe = chatStore.subscribe(res => {
      chatList = res;
    });
  };

  onMount(() => {
    getChatList();
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<style>
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

<div
  on:click={() => {
    visible = false;
  }}>
  <Field gapless style="margin-top:10px">
    <EmojiSelector on:emoji={e => addEmoji(e)} />
    <Button primary icon={mdiPlus} on:click={toggle} />
    <Input placeholder="Send Messages" bind:value={message} />
    <Button success icon={mdiSend} on:click={() => sendMessage()} />
  </Field>

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
      iconRight={mdiSend}
      style="margin:10px"
      on:click={() => uploadImage()}>
      Send
    </Button>
  </div>
</Modal>
