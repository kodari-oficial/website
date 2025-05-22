interface PageProps {
  children: React.ReactNode
}

export function Page({ children } : PageProps) {
  return (
    <main className='flex flex-col min-h-[calc(100vh-7rem)] py-1.5 lg:py-4 px-1.5 lg:px-32'>
      {children}
    </main>
  )
}