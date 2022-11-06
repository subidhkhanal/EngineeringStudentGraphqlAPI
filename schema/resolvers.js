const {UserList, MovieList, SubjectList} = require("../FakeData")

const NodeCache = require("node-cache")
const chapterCache = new NodeCache({stdTTL: 3000, checkperiod: 0})
const topicCache = new NodeCache({stdTTL: 10, checkperiod: 0})

const resolvers = {
    Query: {

        //Subject Resolver
        subjectList: () => {
            return SubjectList
        },


        //chapter Resolver
        chapterList: (parent, args) => {
            const subjectName = args.subject_name
            let chapterList = chapterCache.get(String(subjectName))
            if (chapterList === undefined) {
                // handling miss here
                chapterList = SubjectList.find(subject => subject.subject_name === subjectName).Chapters
                // .chapters just returns the chapters  from the array otherwise this expression would be very complicated to write
                chapterCache.set(String(subjectName), chapterList)
            }
            return chapterList
        },

        // //topics Resolver
        // list: (parent, args) => {
        //     const subjectName = args.subject_name
        //     const chapterName = args.chapter_name
        //     let topicList = topicCache.get(chapterName)
        //     let chapterList = chapterCache.get(subjectName)
        //     //Checking If we don't have topic in the cache but do have the Subject cache
        //     if (topicList === undefined && chapterList !== undefined) {
        //         let topicList = chapterList.find(chapter => chapter.chapters_name === chapterName).topics
        //         topicCache.set(chapterName, topicList, 0)
        //     }
        //     if (topicList === undefined && chapterList === undefined) {
        //         // Yes This is little memory consuming but doing .map.find is so complicated reading causes a headache
        //         // . chapters gives directly the list of the chapter that satisfies the condition of  subject.subject_name === subjectName and saves memory
        //         chapterList = SubjectList.find(subject => subject.subject_name === subjectName).Chapters
        //         topicsList = chapterList.find(chapter => chapter.chapters_name === chapterName).topics
        //         topicCache.set(chapterName, topicList, 6000)
        //         }
        //         return topicList
        //     },
        }
    }

    module.exports = {resolvers}
