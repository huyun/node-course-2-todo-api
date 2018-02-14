const {ObjectID} = require('mongodb');

const {mongose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id:'5a83fa93839915067e6acf43'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5a83fa93839915067e6acf43').then((todo) => {
  console.log(todo);
});
