module.exports = (Ferdi, settings) => {
  const getMessages = function getMessages() {
    const unreadBadges = document.querySelectorAll("span.unread");
    const unreadBadgesArray = Array.from(unreadBadges);
    const unreadBadgesValues = unreadBadgesArray.map((unreadBadgesArray) =>
      parseInt(unreadBadgesArray.innerText),
    );
    const unreadMessagesCount = unreadBadgesValues.reduce((a, b) => a + b);

    Ferdi.setBadge(unreadMessagesCount);
  };

  Ferdi.loop(getMessages);
};
