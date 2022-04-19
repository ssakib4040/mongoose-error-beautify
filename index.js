module.exports = function (text) {
  let extractValidateError = text.replace("User validation failed: ", "");

  const arrayError = extractValidateError.split(", ");

  let finalData = [];

  arrayError.map((e) => {
    const message = e.split(":");
    // console.log(message[1]);

    const key = message[0];
    const value = message[1];

    const data = {
      [key]: value.trim(),
    };

    finalData.push(data);
  });

  return finalData;
};
