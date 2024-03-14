import { useState } from 'react'
import './index.css'

const content = [
  {
    id: 1,
    img: "process-icon-1.svg",
    title: "47+ Components",
    content: (<>Save time and build products with <span>well-organized and customizable </span> desktop components for Figma."</>)
  },
  {
    id: 2,
    img: "process-icon-2.svg",
    title: "Documentation",
    content: (<>Developer handoff made easy. Component and style guide documentation for your team in <span> one place </span>.</>)
  },
  {
    id: 3,
    img: "process-icon-3.svg",
    title: "Design Faster",
    content: (<>Stop wasting time on creating everything from scratch for <span> every new project </span> you start.</>)
  },
  {
    id: 4,
    img: "process-icon-4.svg",
    title: "Customize",
    content: (<>Easily apply your branding by changing font, color and <span>component properties</span>.</>)
  },
];


function App() {

  return (
    <>
      <div className='app'>
        {/* DOTTED LINES IN BACKGROUND */}
        <div className='relative mx-20 -z-10 max-w-[1280px] xl:mx-auto'>
          <div className="h-[180vh] md:h-[110vh] xl:h-screen absolute border-dashed border-l-[1px] border-theme-grey-1 w-1 overflow-auto" />
          <div className="h-[180vh] md:h-[110vh] xl:h-screen absolute border-dashed border-l-[1px] border-theme-grey-1 w-1 left-1/4 max-xl:hidden" />
          <div className="h-[180vh] md:h-[110vh] xl:h-screen absolute border-dashed border-l-[1px] border-theme-grey-1 w-1 left-1/2 max-md:hidden" />
          <div className="h-[180vh] md:h-[110vh] xl:h-screen absolute border-dashed border-l-[1px] border-theme-grey-1 w-1 left-3/4 max-xl:hidden" />
        </div>


        <div className="mx-20 red-hat pt-[200px] max-w-[1280px] xl:mx-auto">
          <div className='ml-[20px]'>
            <h3 className='text-[24px] font-semibold text-theme-purple '>
              Our Process
            </h3>
            <h1 className='text-[48px] font-bold text-theme-grey-3 tracking-tight'>
              Easy And Perfect Solution For Your Business App
            </h1>
          </div>

          <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
            {content.map((item) =>
              <div key={item.id} className='flex flex-col gap-[20px] mt-[80px]'>
                <img
                  src={item.img}
                  className='ml-[20px] h-[52px] w-[52px]'
                />
                <h2 className='text-xl font-semibold border-l-2 pl-[20px] border-theme-purple text-theme-grey-3'>{item.title}</h2>
                <div className='pl-[20px]'>
                  <p className='pr-5 text-[18px] text-theme-grey-2 font-light'>{item.content}
                  </p>
                </div>
              </div>
            )}
          </div>

        </div >
      </div>
    </>
  )
}

export default App
