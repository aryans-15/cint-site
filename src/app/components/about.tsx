import { JetBrains_Mono } from 'next/font/google'

const jbm = JetBrains_Mono({subsets: ["latin"], style: ["normal"]})

export default function About() {
    return <div className='flex flex-col md:flex-row bg-gray-900 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
        <div className='grow border-b-amber-300 border-b-2'>
            <p className={`${jbm.className} text-slate-300 text-sm`}> -&gt; 01.</p>
            <h1 className={`${jbm.className} text-amber-300 text-5xl`}>Overview </h1>
        </div>
        <div className='w-full md:w-2/3 flex flex-col gap-1'>
            <h1 className={`${jbm.className} text-amber-300 font-bold text-xl`}>What is CInT?</h1>
            <p>
                CInT is a competitive informatics tournament organized by students at Centennial High School, giving middle and high school students the opportunity to learn how to code, apply problem solving skills, 
                and make new friends while tackling algorithm-based challenges. In 2025, the event will primarily be focused towards beginners.
            </p>
            <h1 className={`${jbm.className} text-amber-300 font-bold text-xl mt-4`}>Date & Location</h1>
            <p>
                This year, CInT will be held on May 4, 2025, at the{' '}
                <b>Elkridge Library</b>{' '}
                (6540 Washington Blvd, Elkridge, MD 21075) from 1:30 PM to 4:30 PM.
                Please note that this is a different location from previous years.
                <br/><br/>
                More info will be coming soon; keep an eye on this site!
            </p>
            <h1 className={`${jbm.className} text-amber-300 font-bold text-xl mt-4`}>Contest Rules</h1>
            <ul className='list-outside list-disc ml-4'>
                <li className='list-item'>Groups of up to three are allowed, but each student must register individually.</li>
                <li className='list-item'>Students of all experience levels are welcome. There will be a beginner and advanced division.</li>
                <li className='list-item'>Groups my be formed in advance, but time will be provided to create teams at the event.</li>
                <li className='list-item'>Prizes will be awarded to individual members on winning teams.</li>
            </ul>
        </div>
    </div>
}