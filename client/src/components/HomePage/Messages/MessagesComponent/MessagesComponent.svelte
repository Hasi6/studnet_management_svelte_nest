<script>
  import { onMount, onDestroy } from "svelte";
  import { setClient, getClient, query, mutate } from "svelte-apollo";
  import chatIdStore from "../../../../app/Store/chat/chatId.store";
  import MessagesHeader from "./MessagesHeader/MessagesHeader";
  import MessageCard from "./MessageCard/MessageCard.svelte";
  import AddMessage from "./AddMessage/AddMessage.svelte";
  import { client } from "../../../../app/helpers/apolloClient";
  import { getMessages } from "../../../../app/graphql/queries/getMessages.query";

  setClient(client);
  const getCliet = getClient();

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

  $: (async () => {
    if (chatId) {
      messages = await query(getCliet, {
        query: getMessages,
        variables: { chatId }
      });
      console.log(messages);
    }
  })();

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
