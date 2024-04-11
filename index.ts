#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todos: string [] = [];
let condition = true;

console.log(chalk.greenBright.bold("\n \t welcom to code with umm e habiba - ToDo-List Application\n"));

// while(condition) {
//   let addTask = await inquirer.prompt([
//     {
//       name: "todo",
//       type: "input",
//       message: chalk.magenta("what you want to add in your ToDos?"),
//     },

//     {
//       name: "addMore",
//       type: "confirm",
//       message: chalk.magenta("Do you want to add more ?"),
//       default: "false",
//     },
//   ]);
//   todos.push(addTask.todo);
//   condition = addTask.addMore
//   console.log(todos)
// }

let main = async () => {
  while(condition){
    let option = await inquirer.prompt([
      {
        name:"choice",
        type: "list",
        message: "Select an option:",
        choices: ["Add Task", "Delete Task", "Update Task", "View ToDo-List", "Exit"],
      }
    ]);
    if(option.choice === "Add Task"){
      await addTask()

    }else if(option.choice === "Delete Task"){
      await deleteTask()
    }
    else if(option.choice === "Update Task"){
      await updateTask()
    }
    else if(option.choice === "View ToDo-List"){
      await viewTask()
    }
    else if(option.choice === "Exit"){
      condition = false;
    }
    
  }
}
//function to add new task
let addTask = async () => {
  let newTask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message: "Enter your new task :"
    }
  ]);
  todos.push(newTask.task);
  console.log(chalk.magenta.bold`\n ${newTask.task} task added successfully`);
}

//functiion to view all tasks
let viewTask = () => {
  console.log(chalk.magenta.bold`\n your ToDo-List: \n`);
  todos.forEach((task, index) => {
    console.log(`${index + 1}: ${task}`)
  })
}

//function to delete task
let deleteTask = async () => {
  await viewTask()
  let taskIndex = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter the 'index number' of the task you want to delete :",
    }
  ]);
  let deleteTask = todos.splice(taskIndex.index - 1, 1);
  console.log(chalk.magenta.bold`\n ${deleteTask} this task has been deleted successfully `);
}

//functon to update task
let updateTask = async () => {
  await viewTask()
  let update_task_index = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter the 'index number' of the task you want to update :"
    },
    {
      name: "new_task",
      type: "input",
      message: "Now enter new task name :",
    }
  ]);
  todos[update_task_index.index - 1] = update_task_index.new_task
  console.log(chalk.magenta.bold`\n Task at index number ${update_task_index - 1} updated successfully  [for updated list check option: "View ToDo-List"]`)
}
main();