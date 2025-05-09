import { JetBrains_Mono } from "next/font/google"

const jbm = JetBrains_Mono({ subsets: ["latin"] })

export default function NavBar() {
    return <main className="bg-gray-900 flex flex-col items-center">
        <div className="flex flex-row p-2 w-full items-center">
            <span className={`${jbm.className} text-amber-300 text-2xl font-bold`}> CInT </span>
            <div className="flex-1"></div>
            <div className="flex flex-row gap-2 items-center text-sm">
                <a className={`${jbm.className} btn-primary text-sm`} href="https://forms.gle/KPW4AHFq1STSP8ES8" target="_blank" rel="noopener noreferrer">Register</a>
            </div>
        </div>

    </main>
}
