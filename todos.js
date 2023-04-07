let input = prompt('What would you like to do?');
const todos = [];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('**********');
        for (i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**********');
    } else if (input === 'add') {
        const addTodo = prompt('What would you like to add?');
        todos.push(addTodo);
        console.log(`${addTodo} is added to the list!`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Enter an index to delete:'));
        if (!Number.isNaN(index)) {
        const deleted = todos.splice(index, 1);
        console.log(`Ok, deleted ${deleted[0]}`);
        }
    } else {
        console.log('Invalid index')
    }
    input = prompt('What would you like to do?');
}
console.log('OK, YOU QUIT!');
