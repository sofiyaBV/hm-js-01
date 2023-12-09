const checkForSpam = function (message) {
  const lowercasedMessage = message.toLowerCase();
  const forbiddenWords = ["spam", "sale"];
  for (const word of forbiddenWords) {
    if (lowercasedMessage.includes(word)) {
      return true;
    }
  }
  return false;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
