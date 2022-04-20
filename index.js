module.exports = function (errorFromMongoose = null) {
  if (!errorFromMongoose) return null;

  // save document error
  if (errorFromMongoose && errorFromMongoose.errors) {
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
  }

  // invalid object id detect
  if (
    errorFromMongoose &&
    errorFromMongoose.message &&
    errorFromMongoose.message.match(/Cast to ObjectId/i)
  ) {
    return { error: "Invalid object id" };
  }

  // duplicate entry
  if (
    errorFromMongoose &&
    errorFromMongoose.message &&
    errorFromMongoose.message.match(/E11000/i)
  ) {
    return { error: "Duplicate entry" };
  }
};
