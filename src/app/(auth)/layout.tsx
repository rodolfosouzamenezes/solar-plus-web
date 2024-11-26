'use client'

import { Header } from '@/components/Header'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex h-screen max-h-screen justify-center overflow-hidden bg-white dark:bg-zinc-800">
      <Header />
      <div className="mt-16 flex h-[calc(100vh_-_64px)] w-full justify-center overflow-y-scroll">
        <div className="container flex">
          <main className="w-full px-4 py-12">{children}</main>
        </div>
      </div>
    </div>
  )
}
