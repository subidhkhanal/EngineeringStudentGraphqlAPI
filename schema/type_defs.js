const typeDefs = `
    
    type Query {
        subjectList: [Subject!]!
        chapterList(subject_name:String!): [Chapters!]!
    }
     
    type Subject{
    subject_name: String
    subject_description: String
    subject_image: String
    Chapters: [Chapters]
    }
    
    type Chapters{
    subject_name: String
    chapter_name: String
    topics: [Topics]
    }
  
    type chapterList{
    subject_name: String
    Chapters: [Chapters]
    }
    
    type list{
    subject_name: String
    chapter_name: String
    topics: [Topics]
    }
    
    type Topics{
    topics_name: String
    topic_video: String
    quiz: [Quiz]
    }
    
    type Quiz{
    title: String
    index : Int
    answerOptions : [AnswerOptions]
    }
    
    type AnswerOptions{
    answer: String
    isCorrect: Boolean
    index: Int
    }
`

module.exports = {typeDefs}