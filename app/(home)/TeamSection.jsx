import React from 'react';

const TeamSection = () => {
  return (
    <section id="team" className="section relative pt-20 pb-8 md:pt-16 bg-white dark:bg-gray-800">
      <div className="container xl:max-w-6xl mx-auto px-4">
        {/* section header */}
        <header className="text-center mx-auto mb-12">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
            <span className="font-light">Take Mock Interviews with NudgeQuest</span> And Land Your Dream Job
          </h2>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 60" style={{ margin: '0 auto', height: '35px' }} xmlSpace="preserve">
            <circle cx="50.1" cy="30.4" r="5" className="stroke-primary" style={{ fill: 'transparent', strokeWidth: '2', strokeMiterlimit: '10' }}></circle>
            <line x1="55.1" y1="30.4" x2="100" y2="30.4" className="stroke-primary" style={{ strokeWidth: '2', strokeMiterlimit: '10' }}></line>
            <line x1="45.1" y1="30.4" x2="0" y2="30.4" className="stroke-primary" style={{ strokeWidth: '2', strokeMiterlimit: '10' }}></line>
          </svg>
        </header>
        {/* end section header */}
        {/* row */}
        <div className="flex flex-wrap flex-row -mx-4 justify-center">
          {/* Team member 1 */}
          <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
            <div className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
              <div className="relative overflow-hidden px-6">
                <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png" className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="Joe Antonio" />
              </div>
              <div className="pt-6 text-center">
                <p className="text-lg leading-normal font-bold mb-1">Sam Altman</p>
                <p className="text-gray-500 leading-relaxed font-light">Blockchain Developer</p>
                <div className="mt-2 mb-5 space-x-2">
                  <a className="hover:text-blue-700" aria-label="Twitter link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"></path>
                    </svg>
                  </a>
                  <a className="hover:text-blue-700" aria-label="Facebook link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"></path>
                    </svg>
                  </a>
                  <a className="hover:text-blue-700" aria-label="Instagram link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"></path>
                      <path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"></path>
                      <path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"></path>
                    </svg>
                  </a>
                  <a className="hover:text-blue-700" aria-label="Linkedin link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.17c20.43,0,38.6-18.1,38.6-38.6V71.61C482.77,51.1,464.6,32,444.17,32ZM165.62,405.56H106.86V208.62H165.62ZM136.24,188.92c-18.55,0-33.68-15.18-33.68-33.84,0-18.65,15.18-33.85,33.68-33.85,18.52,0,33.7,15.18,33.7,33.85C169.94,173.74,154.8,188.92,136.24,188.92ZM405.56,405.56H346.82V295.45c0-27.5-10.2-46.3-35.91-46.3-19.54,0-31.14,13.12-36.2,25.74-1.86,4.48-2.31,10.7-2.31,16.95v114.27H226.17V208.62h43.82v19.3c9.5-14.5,26.27-35.3,64.58-35.3,47.11,0,82.46,30.8,82.46,97.23V405.56Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Team member 2 */}
          <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
            <div className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
              <div className="relative overflow-hidden px-6">
                <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png" className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="Martha Griffin" />
              </div>
              <div className="pt-6 text-center">
                <p className="text-lg leading-normal font-bold mb-1">Martha Griffin</p>
                <p className="text-gray-500 leading-relaxed font-light">Prompt Engieneer</p>
                <div className="mt-2 mb-5 space-x-2">
                  <a className="hover:text-blue-700" aria-label="Twitter link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"></path>
                    </svg>
                  </a>
                  <a className="hover:text-blue-700" aria-label="Facebook link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"></path>
                    </svg>
                  </a>
                  <a className="hover:text-blue-700" aria-label="Instagram link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"></path>
                      <path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"></path>
                    </svg>
                  </a>
                  <a className="hover:text-blue-700" aria-label="Linkedin link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.17c20.43,0,38.6-18.1,38.6-38.6V71.61C482.77,51.1,464.6,32,444.17,32ZM165.62,405.56H106.86V208.62H165.62ZM136.24,188.92c-18.55,0-33.68-15.18-33.68-33.84,0-18.65,15.18-33.85,33.68-33.85,18.52,0,33.7,15.18,33.7,33.85C169.94,173.74,154.8,188.92,136.24,188.92ZM405.56,405.56H346.82V295.45c0-27.5-10.2-46.3-35.91-46.3-19.54,0-31.14,13.12-36.2,25.74-1.86,4.48-2.31,10.7-2.31,16.95v114.27H226.17V208.62h43.82v19.3c9.5-14.5,26.27-35.3,64.58-35.3,47.11,0,82.46,30.8,82.46,97.23V405.56Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Team member 3 */}
          <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
            <div className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
              <div className="relative overflow-hidden px-6">
                <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png" className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="John Doe" />
              </div>
              <div className="pt-6 text-center">
                <p className="text-lg leading-normal font-bold mb-1">AP Dhillon</p>
                <p className="text-gray-500 leading-relaxed font-light">NextJS Developer</p>
                <div className="mt-2 mb-5 space-x-2">
                  <a className="hover:text-blue-700" aria-label="Twitter link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"></path>
                    </svg>
                  </a>
                  <a className="hover:text-blue-700" aria-label="Facebook link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"></path>
                    </svg>
                  </a>
                  <a className="hover:text-blue-700" aria-label="Instagram link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"></path>
                      <path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"></path>
                    </svg>
                  </a>
                  <a className="hover:text-blue-700" aria-label="Linkedin link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.17c20.43,0,38.6-18.1,38.6-38.6V71.61C482.77,51.1,464.6,32,444.17,32ZM165.62,405.56H106.86V208.62H165.62ZM136.24,188.92c-18.55,0-33.68-15.18-33.68-33.84,0-18.65,15.18-33.85,33.68-33.85,18.52,0,33.7,15.18,33.7,33.85C169.94,173.74,154.8,188.92,136.24,188.92ZM405.56,405.56H346.82V295.45c0-27.5-10.2-46.3-35.91-46.3-19.54,0-31.14,13.12-36.2,25.74-1.86,4.48-2.31,10.7-2.31,16.95v114.27H226.17V208.62h43.82v19.3c9.5-14.5,26.27-35.3,64.58-35.3,47.11,0,82.46,30.8,82.46,97.23V405.56Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Team member 4 */}
          <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
            <div className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
              <div className="relative overflow-hidden px-6">
                <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar4.png" className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="Jane Smith" />
              </div>
              <div className="pt-6 text-center">
                <p className="text-lg leading-normal font-bold mb-1">Samay Raina</p>
                <p className="text-gray-500 leading-relaxed font-light">Web SocketDeveloper</p>
                <div className="mt-2 mb-5 space-x-2">
                  <a className="hover:text-blue-700" aria-label="Twitter link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"></path>
                    </svg>
                  </a>
                  <a className="hover:text-blue-700" aria-label="Facebook link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"></path>
                    </svg>
                  </a>
                  <a className="hover:text-blue-700" aria-label="Instagram link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"></path>
                      <path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"></path>
                    </svg>
                  </a>
                  <a className="hover:text-blue-700" aria-label="Linkedin link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.17c20.43,0,38.6-18.1,38.6-38.6V71.61C482.77,51.1,464.6,32,444.17,32ZM165.62,405.56H106.86V208.62H165.62ZM136.24,188.92c-18.55,0-33.68-15.18-33.68-33.84,0-18.65,15.18-33.85,33.68-33.85,18.52,0,33.7,15.18,33.7,33.85C169.94,173.74,154.8,188.92,136.24,188.92ZM405.56,405.56H346.82V295.45c0-27.5-10.2-46.3-35.91-46.3-19.54,0-31.14,13.12-36.2,25.74-1.86,4.48-2.31,10.7-2.31,16.95v114.27H226.17V208.62h43.82v19.3c9.5-14.5,26.27-35.3,64.58-35.3,47.11,0,82.46,30.8,82.46,97.23V405.56Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
