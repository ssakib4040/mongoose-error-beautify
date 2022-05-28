module.exports = function (errorFromMongoose = null) {
  if (!errorFromMongoose) return null;

  // parse mongoose errors
  const processMongooseErrors = JSON.parse(JSON.stringify(errorFromMongoose));

  //  validation error
  if (processMongooseErrors?.name == "ValidationError") {
    const mongooseErrors = processMongooseErrors.errors;

    var formattedError = [];

    Object.keys(mongooseErrors).forEach(function (key) {
      const newArr = mongooseErrors[key];
      newArr.path = newArr?.properties?.path;
      delete newArr.name;
      delete newArr.properties;
      delete newArr.kind;

      formattedError.errorType = "ValidationError";

      formattedError.push(newArr);
    });

    return formattedError;
  }

  //  duplicate entry error
  if (processMongooseErrors?.code == 11000) {
    var formattedError = [];

    formattedError.errorType = "DuplicateEntry";
    formattedError.push(processMongooseErrors.keyValue);

    return formattedError;
  }

  // invalid object id
  if (processMongooseErrors?.name == "CastError") {
    var formattedError = [];

    formattedError.errorType = "CastError";
    formattedError.push(processMongooseErrors);

    return formattedError;
  }

  return errorFromMongoose?.message;
};
