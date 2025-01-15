export default async function Home() {
  const colors = fetch("http://localhost:3000/api/color/list").then(res =>
    res.json(),
  )

  console.dir(colors)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>hello there</p>
        <p>here are some colors:</p>
        <div>{JSON.stringify(colors)}</div>
      </main>
    </div>
  )
}
