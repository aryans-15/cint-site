import { JetBrains_Mono } from 'next/font/google'
import Placeholder from './placeholder'
import FaqQuestion from './faq-question/faqQuestion'

const jbm = JetBrains_Mono({subsets: ["latin"], style: ["normal"]})

export default function Faq() {
    type QuestionAnswer = {
        question: string
        answer: string
    }

    let qas = [
        {
            question: "Is CInT Beginner Friendly?",
            answer: `CInT is beginner-friendly! All middle and high schoolers are welcome and encouraged to attend! However, if you’re interested in competing for a prize, you should have some understanding of Java, C++, or Python.`
        },
        {
            question: "What is competitive programming?",
            answer: `Competitive programming is an academic sport where competitors brainstorm/implement correct and efficient solutions to given problems. At CInT, we offer a variety of problems for all skill levels, ranging from simple addition to USACO Gold+ difficulty!`
        },
        {
            question: "What will CInT be like?",
            answer: `At CInT, you will be given a set of problems to solve, with a chance to win cool tech prizes! Scoring is primarily decided by number of problems solved, and ties are broken by sum of submission times. If this is confusing, feel free to contact us with questions.`
        },
        {
            question: "What should I bring?",
            answer: "While admission is free, you should bring a computer and a charger to CInT."
        },
        {
            question: "Is food provided?",
            answer: "Yes! We will serve pizza, drinks, and plenty of other treats!"
        },
        {
            question: "How will teams be structured?",
            answer: `Team size can be anywhere from 1-4 people. In order to form teams, you can talk to friends beforehand or meet like-minded peers on competition day!`
        },
        {
            question: "Can we use online tools during the contest?",
            answer: "You may use resources such as W3Schools, StackOverflow, or other online forums for syntax purposes. However, participants may NOT plagiarize code, copy projects, or use AI tools (including, but not limited to ChatGPT, Google Gemini, GitHub Copilot, etc) to generate code. Usage of AI will be an automatic disqualification from CInT."
        }
    ] as QuestionAnswer[]

    return <div className='flex flex-col md:flex-row bg-gray-900 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
        <div className='grow border-b-amber-300 border-b-2'>
            <p className={`${jbm.className} text-slate-300 text-sm`}> -&gt; 02.</p>
            <h1 className={`${jbm.className} text-amber-300 text-5xl`}>FAQ</h1>
        </div>
        <div className='w-full md:w-2/3 flex flex-col gap-1'>
            {qas.map((qa, index) => <FaqQuestion key={index} question={qa.question} answer={qa.answer}/>)}
        </div>
    </div>
}