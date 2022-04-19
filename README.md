# mongoose-error-beautify

A simple module to format mongoose errors with ease

# installation

Using npm:

```
$ npm install mongoose-error-beautify
```

or using yarn:

```
$ yarn add mongoose-error-beautify
```

# usage

```javascript
const mongoose_beautify = require("mongoose-error-beautify");

try {
  const user = new User({
    // name: "MD",
    // age: 6,
    // password: "123",
  });

  const data = await user.save();

  res.send({ message: "ok" });
} catch (error) {

  console.log(error.message);
  // User validation failed: password: Please enter your password, age: Please enter your age, name: Please enter a name

  console.log(mongoose_beautify(error.message));
  //[
  //  { password: "Please enter your password" },
  //  { age: "Please enter your age" },
  //  { name: "Please enter a name" },
  //];
}
```
