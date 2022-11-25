//Using OOP to organised a Todo list CLI app.

//creating a new task
const newTask = function(title, description) {
  const task = {
    title : title,
    description : description,
    complete : false,

    logState : function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted : function() {
      this.complete = true;
    }

  };
  return task;
};


//Driver code
const task1 = newTask("clean cat litter", "scoop poop out"); //by assigning to a variable, the result now has access to variables within the function that it was called from eg the const Task is now accessible by functions outside of its scope
const task2 = newTask("do laundry", "washing gym clothes");
const tasks = [task1, task2];

task2.logState(); //current state
task2.markCompleted(); //changes state from default false to true
task2.logState(); //updated state

console.log("tasks", tasks);

/*
//Existing/old code refactored above
// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title) {
  taskTitles.push(title);
  taskComplete.push(false);
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(taskIndex) {
  taskComplete[taskIndex] = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(taskIndex) {
  const title = taskTitles[taskIndex];
  const complete = taskComplete[taskIndex];
  console.log(`${title} has${complete ? " " : " not "}been completed`);//ternary expression in the console log to print a certain message if truthy/falsey
}

// DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed
 */
