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
const mongooseErrorBeautify = require("mongoose-error-beautify");

try {
  const user = new User({
    // name: "John",
    // age: 6,
    // password: "123",
  });

  await user.save();

} catch (error) {
  console.log(error);

  // Error: User validation failed: username: Username must be provided, email: Email must be provided
  //     at ValidationError.inspect (D:\NodeJS\mongoose-error-beautify\node_modules\mongoose\lib\error\validation.js:48:26)
  //     at formatValue (node:internal/util/inspect:782:19)
  //     at inspect (node:internal/util/inspect:347:10)
  //     at formatWithOptionsInternal (node:internal/util/inspect:2167:40)
  //     at formatWithOptions (node:internal/util/inspect:2029:10)
  //     at console.value (node:internal/console/constructor:324:14)
  //     at console.log (node:internal/console/constructor:360:61)
  //     at init (D:\NodeJS\mongoose-error-beautify\server.js:24:13)
  //     at processTicksAndRejections (node:internal/process/task_queues:96:5

  console.log(mongooseErrorBeautify(error));
  [
    {
      message: 'Username must be provided',
      path: 'username'
    },
    {
      message: 'Email must be provided',
      path: 'email'
    },
    errorType: 'ValidationError'
  ]
}
```
