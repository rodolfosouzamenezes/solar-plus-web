import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="hidden h-screen w-screen items-center justify-center md:flex">
      <div className="h-[90%] w-[90%] flex-col items-center justify-center space-y-12 rounded-md bg-red-700 p-12 text-center text-white md:flex xl:h-3/5 xl:w-3/5">
        <div className="mb-4 space-y-5">
          <h1 className="text-8xl font-bold">404</h1>
          <h1 className="text-5xl font-bold">
            Oops! Parece que você está perdido
          </h1>
        </div>
        <p className="max-w-[90%] text-lg font-light">
          Nós não conseguimos encontrar a página que você está procurando.
          Porfavor confira se a sua URL está correta ou volte para a home
        </p>

        <Link
          href="/"
          className="w-80 rounded-lg bg-white p-4 text-sm font-semibold  uppercase text-red-600 shadow-sm hover:bg-white hover:opacity-90 dark:bg-white dark:hover:bg-white"
        >
          Ir para home
        </Link>
      </div>
    </div>
  )
}
