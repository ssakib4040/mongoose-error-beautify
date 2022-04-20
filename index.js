module.exports = function (errorFromMongoose = "") {
  if (!errorFromMongoose) return null;

  const processMongooseErrors = JSON.parse(JSON.stringify(errorFromMongoose));

  const eachItemArr = [];

  const propertyNames = Object.entries(processMongooseErrors.errors);

  propertyNames.forEach((propertyName) => {
    delete propertyName[1].properties;
    delete propertyName[1].path;
    delete propertyName[1].kind;

    const eachItem = {
      [propertyName[0]]: propertyName[1].message,
    };

    eachItemArr.push(eachItem);
  });

  return eachItemArr;
};
