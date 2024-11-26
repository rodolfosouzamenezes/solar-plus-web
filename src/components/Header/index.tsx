'use client'

import { Avatar } from '../Avatar'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { Skeleton } from '../Skeleton'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { useAuth } from '@/contexts/AuthContext'
import Image from 'next/image'

export function Header() {
  const [isLoading, setIsLoading] = useState(false)
  const { logout, user } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    try {
      setIsLoading(true)

      // router.replace('/login')
      toast.success('Usuário desconectado com sucesso')
      // setTimeout(async () => {
      //   logout()
      // }, 2000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed left-0 right-0 top-0 z-10 flex justify-center bg-red-800">
      <div className="container px-12">
        <div className="flex items-center justify-between py-3">
          <Image
            alt=""
            src="https://modernizesoftwares.s3.us-east-2.amazonaws.com/defense-logo.png"
            width={150}
            height={50}
            className="h-5 w-auto"
            priority
          />

          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            {user?.id && !isLoading ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="rounded-full">
                  <Avatar userName={user.name} />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56"
                  align="end"
                  forceMount
                  sideOffset={15}
                >
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm font-medium leading-none">
                        {user.name}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.login}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    disabled={isLoading}
                    onSelect={handleLogout}
                  >
                    Sair
                    <LogOut className="ml-auto h-3 w-3" />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Skeleton
                className="rounded-full bg-red-300"
                style={{ height: 35, width: 35 }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
