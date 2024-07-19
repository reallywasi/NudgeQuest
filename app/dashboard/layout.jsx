import React from 'react'
import Header from './_components/Header'
function DashboardLayout({children}) {
  return (
    <div>

<Header/>  
 {/* header is here as we want it throughout the application */}
    {children}
    </div>
  )
}

export default DashboardLayout
