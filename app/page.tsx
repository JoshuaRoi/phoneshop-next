import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div style={{position:'relative', height:'100vh'}}>
        <Image
          src={'/images/hero.jpg'}
          alt="hero"
          fill
          quality={100}
          />
      </div>

    </main>
  )
}