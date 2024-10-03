import Bottombar from '@/components/shared/Bottombar'
import LeftSiderbar from '@/components/shared/LeftSiderbar'
import Topbar from '@/components/shared/Topbar'

import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSiderbar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  )
}

export default RootLayout