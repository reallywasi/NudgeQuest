import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  
import { Button } from "@/components/ui/button";
  import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


  import React from 'react'
  
  function Drawerx() {
    return (
        <div>
        <Drawer>
          <DrawerTrigger className='text-red-200'>@Wasi</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Connect with Me</DrawerTitle>
              <DrawerDescription>Select an option to connect with me.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-100 p-4 rounded-md shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105 flex items-center">
                <FaLinkedin className="text-blue-600 text-3xl mr-4" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Connect with me on LinkedIn</h3>
                  <p className="text-gray-600">Let's connect on LinkedIn to keep in touch and network professionally.</p>
                  <a href="https://www.linkedin.com/in/m-wasi-4a5825242/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="mt-2">Visit LinkedIn</Button>
                  </a>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-md shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105 flex items-center">
                <FaGithub className="text-gray-800 text-3xl mr-4" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Add me on GitHub</h3>
                  <p className="text-gray-600">Follow me on GitHub for updates on my latest projects and contributions.</p>
                  <a href="https://github.com/reallywasi" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="mt-2">Visit GitHub</Button>
                  </a>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-md shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105 flex items-center">
                <FaEnvelope className="text-gray-600 text-3xl mr-4" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Email me</h3>
                  <p className="text-gray-600">Feel free to drop me an email for any inquiries or collaborations.</p>
                  <a href="reallywasi@example.com">
                    <Button variant="outline" className="mt-2" >Send Email</Button>
                  </a>
                </div>
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    )
  }
  
  export default Drawerx
  