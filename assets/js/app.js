// JS Objects

// Setup/Config/Initialising
const clearTodosButton = document.querySelector('#clearTodosButton')
const addTodoForm = document.querySelector('#addTodoForm')

let toDos = [
    {
        text: 'Get Milk',
        completed: false,
    },
    {
        text: 'Get Eggs',
        completed: false,
    },
    {
        text: 'Get Bread',
        completed: false,
    },
    {
        text: 'Get Ham',
        completed: true,
    },
]

// Function Definitions
const addToDo = (toDoText = '') => {
    const newTodo = {
        text: toDoText,
        completed: false,
    }
    toDos = [newTodo, ...toDos]
}

const clearToDos = () => {
    toDos = []
}

const toDoCardElement = (toDo) => {
    // creating some HTML Elements
    const card = document.createElement('div')
    const cardButton = document.createElement('button')
    const cardText = document.createElement('span')
    const cardCompleteCheckbox = document.createElement('input')

    // setting HTML attributes
    cardText.classList.add('toDoCardDeleteButton')
    cardCompleteCheckbox.setAttribute('type', 'checkbox')
    card.classList.add('toDoCard')
    if (toDo.completed) {
        card.classList.add('completed')
    }
    cardButton.classList.add('toDoCardDeleteButton')

    // setting the internal text of the element
    cardText.textContent = toDo.text
    cardButton.textContent = 'Delete'

    // add delete functionality here
    // add Checked functionality here

    // adding the children to the parent element
    card.appendChild(cardCompleteCheckbox)
    card.appendChild(cardText)
    card.appendChild(cardButton)
    return card
}

const renderToDoList = () => {
    const toDosList = document.querySelector('#toDosList')

    toDosList.innerHTML = ''

    toDos.forEach((toDo) => {
        toDosList.appendChild(toDoCardElement(toDo))
    })
}

const handleSubmit = (event) => {
    event.preventDefault()

    const addToDoInput = document.querySelector('#addToDoInput')

    addToDo(addToDoInput.value)
    renderToDoList()
}

const handleDelete = () => {
    // delete the todo
}
const handleComplete = () => {
    // delete the todo
}

// Functional Code
addTodoForm.addEventListener('submit', handleSubmit)

// add load event
window.addEventListener('load', renderToDoList)
