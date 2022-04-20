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
    // name: "John",
    // age: 6,
    // password: "123",
  });

  const data = await user.save();

  res.send({ message: "ok" });
} catch (error) {

  console.log(error);
  // Error: User validation failed: password: Please enter your password, age: Please enter your age, name: Please enter a name
  //     at ValidationError.inspect (D:\NodeJS\nodejs-app\node_modules\mongoose\lib\error\validation.js:48:26)
  //     at formatValue (node:internal/util/inspect:782:19)
  //     at inspect (node:internal/util/inspect:347:10)
  //     at formatWithOptionsInternal (node:internal/util/inspect:2167:40)
  //     at formatWithOptions (node:internal/util/inspect:2029:10)
  //     at console.value (node:internal/console/constructor:324:14)
  //     at console.log (node:internal/console/constructor:360:61)
  //     at D:\NodeJS\nodejs-app\server.js:46:13
  //     at processTicksAndRejections (node:internal/process/task_queues:96:5) {
  //   _message: 'User validation failed'
  // }



  console.log(mongoose_beautify(error));
  //[
  //  { password: "Please enter your password" },
  //  { age: "Please enter your age" },
  //  { name: "Please enter a name" },
  //];
}
```
