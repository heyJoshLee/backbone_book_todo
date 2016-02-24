var Todo = Backbone.Model.extend({
  initialize: function() {
    console.log("A new todo has been born!");
    this.on("change:title", function(){
      console.log("You used the .set() method on me!");
    });
  },

  defaults: {
    title: "Needs a title"
  }
});

var todo1 = new Todo;

console.log(todo1.toJSON());
