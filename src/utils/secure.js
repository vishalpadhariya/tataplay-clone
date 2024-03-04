const generateRandomHex = (length) => {
  return [...Array(length)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");
};
const generateRandomString = (length) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet.charAt(randomIndex);
  }

  return randomString;
};

export const encrypt = (val) => {
  try {
    const firstPart = generateRandomHex(8);
    const secondPart = generateRandomHex(4);
    const thirdPart = "4" + generateRandomHex(3);
    const fourthPart = generateRandomString(6) + val + generateRandomString(4); //exact hax
    const fifthPart = generateRandomHex(3);
    const sixthPart = generateRandomHex(12);
    return `${firstPart}-${secondPart}-${thirdPart}-${fourthPart}-${fifthPart}-${sixthPart}`;
  } catch (error) {
    throw error;
  }
};

export const decrypt = (val) => {
  try {
    const parts = val.split("-");
    const uuid = {
      firstPart: parts[0],
      secondPart: parts[1],
      thirdPart: parts[2],
      fourthPart: parts[3],
      fifthPart: parts[4],
      sixthPart: parts[5],
    };
    const digitRegex = /\d/g;
    const haxValue = uuid?.fourthPart.match(digitRegex);
    if (haxValue) {
      return haxValue.join("");
    } else {
      throw new Error(`Something went wrong!`);
    }
  } catch (error) {
    throw error;
  }
};
