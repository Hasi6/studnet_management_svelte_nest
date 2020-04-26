<script>
  import { onMount } from "svelte";
  import { Card } from "svelte-chota";
  import SingleMessage from "./SingleMessage/SingleMessage.svelte";
  import chatIdStore from "../../../../../app/Store/chat/chatId.store";

  let chatId;
  let unsubscribe;

  const autoScroll = () => {
    const objDiv = document.querySelector(".messageCard");
    if (objDiv) {
      objDiv.scrollTop = objDiv.scrollHeight;
    }
  };

  const getChatId = () => {
    unsubscribe = chatIdStore.subscribe(chat => {
      chatId = chat;
    });
  };

  $: (() => {
    console.log(chatId);
    autoScroll();
  })();

  onMount(() => {
    autoScroll();
    getChatId();
  });
</script>

<style>
  .messageCard {
    height: 400px !important;
    overflow: auto;
  }
</style>

{chatId}
<Card>
  <div class="messageCard">
    <SingleMessage isMe={true} />
    <SingleMessage isMe={false} />
    <SingleMessage isMe={true} />
    <SingleMessage isMe={false} />
    <SingleMessage isMe={true} />
    <SingleMessage isMe={false} />
    <SingleMessage isMe={true} />
    <SingleMessage isMe={false} />
    <SingleMessage isMe={true} />
    <SingleMessage isMe={false} />
    <SingleMessage isMe={true} />
    <SingleMessage isMe={false} />
    <SingleMessage isMe={true} />
    <SingleMessage isMe={false} />
    <SingleMessage isMe={true} />
    <SingleMessage isMe={false} />
    <SingleMessage isMe={true} />
    <SingleMessage isMe={false} />
    <SingleMessage isMe={true} />
    <SingleMessage isMe={false} />
    <SingleMessage isMe={true} />
    <SingleMessage isMe={false} />
    <SingleMessage isMe={true} />
    <SingleMessage isMe={false} />
    <SingleMessage isMe={true} />
    <SingleMessage isMe={false} />
    <SingleMessage isMe={true} />
    <SingleMessage isMe={false} />
    <SingleMessage isMe={true} />
    <SingleMessage isMe={false} />
    <SingleMessage isMe={true} />
    <SingleMessage isMe={false} />
    <SingleMessage isMe={true} />
    <SingleMessage isMe={false} />
    <SingleMessage isMe={true} />
    <SingleMessage isMe={false} />
    <SingleMessage isMe={true} />
    <SingleMessage isMe={false} />
    <SingleMessage isMe={true} />
    <SingleMessage isMe={false} />
  </div>
</Card>
