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
  // CastError: Cast to ObjectId failed for value "625fe5714f9a33641027ed7" (type string) at path "_id" for model "User"
  //     at model.Query.exec (D:\NodeJS\nodejs-app\node_modules\mongoose\lib\query.js:4715:21)
  //     at model.Query.Query.then (D:\NodeJS\nodejs-app\node_modules\mongoose\lib\query.js:4814:15)
  //     at processTicksAndRejections (node:internal/process/task_queues:96:5) {
  //   messageFormat: undefined,
  //   stringValue: '"625fe5714f9a33641027ed7"',
  //   kind: 'ObjectId',
  //   value: '625fe5714f9a33641027ed7',
  //   path: '_id',
  // }


  console.log(mongoose_beautify(error));
  //[
  //  { password: "Please enter your password" },
  //  { age: "Please enter your age" },
  //  { name: "Please enter a name" },
  //];
}
```
