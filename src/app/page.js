import Image from 'next/image'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Home() {
  return (
    <main className="flex flex-col gap-2 min-h-screen items-center justify-center p-24">
      <h1 className='text-6xl'>Sandbox</h1>
      <p>Sandbox to create templates for Next.js</p>
    </main>
  )
}
