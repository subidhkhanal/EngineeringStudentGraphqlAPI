

// We are using node-cache for caching and it can be found at https://www.npmjs.com/package/node-cache
//stdTTL: (default: 0) the standard ttl as number in seconds for every generated cache element. 0 = unlimited
// checkperiod: (default: 600) The period in seconds, as a number, used for the automatic delete check interval. 0 = no periodic check.

const UserList = [
    {
        id: 1,
        name: "John",
        username: "john",
        age: 20,
        nationality: "CANADA",
        friends: [
            {
                id: 2,
                name: "Pedro",
                username: "PedroTech",
                age: 20,
                nationality: "BRAZIL",
            },
            {
                id: 5,
                name: "Kelly",
                username: "kelly2019",
                age: 5,
                nationality: "CHILE",
            },
        ],
    },
    {
        id: 2,
        name: "Pedro",
        username: "PedroTech",
        age: 20,
        nationality: "BRAZIL",
    },
    {
        id: 3,
        name: "Sarah",
        username: "cameron",
        age: 25,
        nationality: "INDIA",
        friends: [
            {
                id: 2,
                name: "Pedro",
                username: "PedroTech",
                age: 20,
                nationality: "BRAZIL",
            },
        ],
    },
    {
        id: 4,
        name: "Rafe",
        username: "rafe123",
        age: 60,
        nationality: "GERMANY",
    },
    {
        id: 5,
        name: "Kelly",
        username: "kelly2019",
        age: 5,
        nationality: "CHILE",
    },
]

const MovieList = [
    {
        id: 1,
        name: "Avengers Endgame",
        yearOfPublication: 2019,
        isInTheaters: true,
    },
    {
        id: 2,
        name: "Interstellar",
        yearOfPublication: 2007,
        isInTheaters: true,
    },
    {
        id: 3,
        name: "Superbad",
        yearOfPublication: 2009,
        isInTheaters: true,
    },
    {
        id: 4,
        name: "PedroTech The Movie",
        yearOfPublication: 2035,
        isInTheaters: false,
    },
]


const SubjectList = [
    {
        subject_name: "Information System",
        subject_description: "Information System is something",
        subject_image: "There will be an Image Here",
        Chapters: [
            {
                subject_name: 'Hello Hello',
                chapters_name: "1. Introduction toot Information System",
                topics: [
                    {
                        topics_name: "Classification and Evolution of Information System",
                        topic_video: "https://youtu.be/aa_ca8EaZDg",
                        topic_Question: [
                            {
                                question: "",
                                answer: ""
                            },
                            {
                                question: "",
                                answer: ""
                            }
                        ],
                        quiz: [
                            {
                                title: "What is the important factor of a Information Management System?",
                                index: 1,
                                answerOptions: [
                                    {answer: "Information", isCorrect: false, index: 1},
                                    {answer: "System", isCorrect: true, index: 1},
                                    {answer: "Planning", isCorrect: false, index: 1},
                                    {answer: "Personnel", isCorrect: false, index: 1}]
                            },
                        ]
                    },
                ]
            },
            {
                subject_name: '',
                chapters_name: "2. Introduction To Information System",
                topics: [
                    {
                        topics_name: "Classification and Evolution of Information System",
                        topic_video: "https://youtu.be/aa_ca8EaZDg",
                        topic_Question: [
                            {
                                question: "",
                                answer: ""
                            }, {
                                question: "",
                                answer: ""
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        subject_name: "Something Else System",
        subject_description: "Information System is something",
        subject_image: "There will be an Image Here",
        Chapters: [
            {
                subject_name: "Something Else System",
                chapter_name: "1. Introduction to WTF",
                topics: [
                    {
                        topics_name: "Classification and Evolution of Information System",
                        topic_video: "https://youtu.be/aa_ca8EaZDg",
                        topic_Question: [
                            {
                                question: "",
                                answer: ""
                            },
                            {
                                question: "",
                                answer: ""
                            }
                        ],
                        quiz: [
                            {
                                title: "What is the important factor of a Information Management System?",
                                index: 1,
                                answerOptions: [
                                    {answer: "Information", isCorrect: false, index: 1},
                                    {answer: "System", isCorrect: true, index: 1},
                                    {answer: "Planning", isCorrect: false, index: 1},
                                    {answer: "Personnel", isCorrect: false, index: 1}]
                            },
                        ]
                    },
                ]
            },
            {
                chapter_name: "2. Introduction To Information System",
                topics: [
                    {
                        topics_name: "Classification and Evolution of Information System",
                        topic_video: "https://youtu.be/aa_ca8EaZDg",
                        topic_Question: [
                            {
                                question: "",
                                answer: ""
                            }, {
                                question: "",
                                answer: ""
                            }
                        ]
                    }
                ]
            }
        ]
    },
]





const chapterList = SubjectList.map((subject) => {
    return subject.Chapters
})

module.exports = {UserList, MovieList,SubjectList}

