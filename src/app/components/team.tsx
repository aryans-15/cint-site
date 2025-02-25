import { JetBrains_Mono } from 'next/font/google'

const jbm = JetBrains_Mono({subsets: ["latin"], style: ["normal"]})

export default function Team() {
    
    const executive = ["Aryan Sharma", "Jaden Li", "Victor Liu", "Joshua Oh", "Rana Cherukuri", "Lakshith Senthil", "Daud Idrees"];

   const regular = ["Albert Cao", "Aman Alamasety", "Barry Chen", "Ethan Burgoon", "Evan Luo", "Hamza Nasher-Alneam", "Kevin Yue", "Natasha Green", "Taha Ahmed", "Zak Mazerski"];    

    return <div className='flex flex-col md:flex-row bg-gray-900 p-4 pt-16 md:p-8 gap-9 md:gap-9 items-top md:pt-20'>
        <div className='grow border-b-amber-300 border-b-2'>
            <p className={`${jbm.className} text-slate-300 text-sm`}> -&gt; 04.</p>
            <h1 className={`${jbm.className} text-amber-300 text-5xl`}>Our Team</h1>
        </div>
        <div className='w-full md:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-2'>
            <div className='border-2 border-slate-700 rounded-md bg-gray-800'>
                <div className='p-4 w-full border-b-2 border-b-slate-700'>
                    <h1 className={`${jbm.className} text-amber-300 text-lg font-bold`}>Lead Organizers</h1>
                </div>
                <ul className='p-4'>
                    {executive.map((p, i) => {
                        return <li className='mt-1' key={i}> -&gt; {p}</li>
                    })}
                </ul>
            </div>
            <div className='border-2 border-slate-700 rounded-md bg-gray-800'>
                <div className='p-4 w-full border-b-2 border-b-slate-700'>
                    <h1 className={`${jbm.className} text-amber-300 text-lg font-bold`}>Organizers</h1>
                </div>
                <ul className='p-4'>
                    {regular.map((p, i) => {
                        return <li className='mt-1' key={i}> -&gt; {p}</li>
                    })}
                </ul>
            </div>
        </div>
    </div>
}
