

    angular.module('todoApp', [])
      .controller('TodoListController', function() {
        var todoList = this;
        todoList.todos = [
          {text:'learn angular', done:true},
          {text:'build an angular app', done:false}];
     
	


        todoList.addTodo = function($http) {
          todoList.todos.push({text:todoList.todoText, done:false});
          todoList.todoText = '';
	      $http({
		  url: "http://192.168.7.41:8000/test_angularjs",
		  method: 'POST',
		  data: { 'text': 'this is really important', 'date': '2014-06-09'}
	      })
        };
     
        todoList.remaining = function() {
          var count = 0;
          angular.forEach(todoList.todos, function(todo) {
            count += todo.done ? 0 : 1;
          });
          return count;
        };
     
        todoList.archive = function() {
          var oldTodos = todoList.todos;
          todoList.todos = [];
          angular.forEach(oldTodos, function(todo) {
            if (!todo.done) todoList.todos.push(todo);
          });
        };
      });

