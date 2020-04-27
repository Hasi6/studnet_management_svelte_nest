<script>
  import { onMount, onDestroy } from "svelte";
  import chatIdStore from "../../../../app/Store/chat/chatId.store";
  import MessagesHeader from "./MessagesHeader/MessagesHeader";
  import MessageCard from "./MessageCard/MessageCard.svelte";
  import AddMessage from "./AddMessage/AddMessage.svelte";

  let searchKey = "Hasi";
  let chatId;
  let unsubscribe;

  let messages = [
    {
      _id: "3434",
      message: "Hello Hasi",
      chatId: "343434",
      sender: "3434"
    },
    {
      _id: "3434",
      message: "Hello Hasi",
      chatId: "343434",
      sender: "1212"
    }
  ];

  const setSearchKey = e => {
    searchKey = e;
  };

  onMount(() => {
    unsubscribe = chatIdStore.subscribe(chid => {
      chatId = chid;
    });
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<style>

</style>

<div>
  <MessagesHeader {searchKey} {setSearchKey} />
  <MessageCard {chatId} {messages} />
  <AddMessage />
</div>
{chatId} {searchKey}
