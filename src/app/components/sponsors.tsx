import { JetBrains_Mono } from 'next/font/google'
const jbm = JetBrains_Mono({ subsets: ["latin"], style: ["normal"] })

export default function Sponsors() {
  return <div className='flex flex-col md:flex-row bg-gray-900 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
    <div className='grow border-b-amber-300 border-b-2'>
      <p className={`${jbm.className} text-sm`}> -&gt; 04.</p>
      <h1 className={`${jbm.className} text-amber-300 text-5xl`}>Sponsors</h1>
    </div>
    <div className='w-full md:w-2/3 flex flex-col gap-2'>
      <div className="flex flex-col border-2 border-yellow-600">
        <div className="p-2 bg-yellow-600 text-slate-200">
          <h1 className={`${jbm.className} text-lg`}>Gold</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center p-4 items-center bg-yellow-600/30 gap-8">
          <a href="https://x-camp.academy/" target='_blank'>
            <img src="/sponsors/x-camp.png" className='h-32 m-4' alt="X-Camp Logo" style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} />
          </a>
        </div>
      </div>
      <div className="flex flex-col border-2 border-gray-600">
        <div className="p-2 bg-gray-600 text-slate-200">
          <h1 className={`${jbm.className} text-lg`}>Silver</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center p-4 bg-gray-600/3 gap-8">
          <a href="https://www.mathworks.com/" target='_blank'>
            <img src="sponsors/mathworks.png" className='h-24' alt="Mathworks Logo" style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} />
          </a>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center p-4 bg-gray-600/3 gap-8">
          <a href="https://www.janestreet.com/" target='_blank'>
            <img src="sponsors/jane-street.png" className='h-24' alt="Jane Street Logo" style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} />
          </a>
        </div>
      </div>
      <div className="flex flex-col border-2 border-amber-800">
        <div className="p-2 bg-amber-800 text-slate-200">
          <h1 className={`${jbm.className} text-lg`}>Silver</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center p-4 bg-gray-600/3 gap-8">
          <a href="https://www.wegmans.com/" target='_blank'>
            <img src="sponsors/wegmans.jpg" className='h-24' alt="Wegmans Logo" style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} />
          </a>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center p-4 bg-gray-600/3 gap-8">
          <a href="https://www.codehs.com/" target='_blank'>
            <img src="sponsors/codehs.png" className='h-24' alt="CodeHS Logo" style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} />
          </a>
        </div>
      </div>
    </div>
  </div>
}
