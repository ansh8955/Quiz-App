export const quiz = {


questions: [
  
    {
        "id": 1,
        "question": "Which of the following is used in React.js to increase performance?",
        "choices": [
            "Virtual DOM",
            "Original DOM",
            "Both A and B",
            "None of the above"
        ],
        "type": "MCQs",
        "correctAnswer": "Virtual DOM"
    },
    {
        "id": 2,
        "question": "What is ReactJS?",
        "choices": [
            "Server-side framework",
            "User Interface framework",
            "both a and b",
            "None of the above"
        ],
        "type": "MCQs",
        "correctAnswer": "User Interface framework"
    },
    {
        "id": 3,
        "question": "Identify the one which is used to pass data to components from outside",
        "choices": [
            "Render with arguments",
            "setState",
            "PropTypes",
            "props"
        ],
        "type": "MCQs",
        "correctAnswer": "props"
    },
    {
        "id": 4,
        "question": "In which language is React.js written?",
        "choices": [
            "Python",
            "Java",
            "C#",
            "JavaScript"
        ],
        "type": "MCQs",
        "correctAnswer": "JavaScript"
    },
    {
        "id": 5,
        "question": "What is Babel?",
        "choices": [
            "JavaScript interpreter",
            "JavaScript transpiler",
            "JavaScript compiler",
            "None of the above"
        ],
        "type": "MCQs",
        "correctAnswer": "JavaScript compiler"
    }
]

}


export const resultInitialState = {

    score:0,
    correctAnswers:0,
    wrongAnswers:0
}