// Search Result Helper
// https://levelup.gitconnected.com/use-regex-and-javascript-to-improve-search-results-870932050d08
const checkName = (name, str) => {
  var pattern = str
    .split("")
    .map(x => {
      return `(?=.*${x})`;
    })
    .join("");
  var regex = new RegExp(`${pattern}`, "g");
  return name.match(regex);
};

// Search Messages
export const searchMessages = (e, messages, allMessages) => {
  if (!e) {
    return allMessages;
  }
  const str = e.toLowerCase().substring(0, 3);
  const searchResult = messages.filter(msg => {
    const xSub = msg.message.substring(0, 3).toLowerCase();
    return msg.message.toLowerCase().includes(str) || checkName(xSub, str);
  });
  return searchResult;
};
