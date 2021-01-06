import React from 'react';

import { Link } from "react-router-dom";


export default function Aqimos() {
  return (
    <div className="bg-gray-100 bg-opacity-50">
    {/* <div className="max-w-5xl mx-auto pt-10 text-gray-900 md:pt-12">
      <h1 className="mx-6 text-3xl font-semibold md:ml-16 md:text-4xl">Redesigning AQimos<span className="text-blue-400 font-black text-3xl md:text-4xl">.</span></h1>
      <p className="mx-6 text-lg text-gray-800 font-light md:ml-16 md:text-xl">Desktop & Mobile Web App - 2020</p>
     
      <div className="mt-24">
        <div className="mx-6 md:mx-auto">
          <img src={AqimosDetail} alt="" className="mx-auto"/>
        </div>
        <div className="mx-6 mt-12 md:mt-16 max-w-3xl md:mx-auto text-left">
          <p className="text-xl mt-2 text-gray-800 md:text-2xl">In AQimos, they believe that air is a matter of life and death and clean air is a crucial part of life. By that spirit, my
          work is to present the complex data while ensuring the simplicity and easiness of use. I seek to design the system that ensure the complex data to be displayed as clear as possible - to simplify the thought processing and the data display, so the users could make the decision without a heavy cognitive load.</p>
      </div>
      </div>
      <div className="mt-16 md:mt-24">
        <div className="mx-6 md:mx-auto">
          <img src={ContentAudit} alt="" className="mx-auto"/>
          
        </div>
        <div className="mx-6 mt-8 md:mt-10 max-w-3xl md:mx-auto text-left">
          <h2 className="font-semibold text-xl md:text-2xl">Auditing the Content</h2>
          <p className="text-lg break mt-2 font-light md:text-xl">Before the plan new design process happens, I first need to understand what already exist on the current web app. The stakeholder interviews take place first.<br />
            <br />
          I asked questions like: Why are we doing the redesign at all? Who are the users? What has already been decided - the deadline of the website, the technology will be used, and the numbers of developers involved in the project. This is important as I have to build a solid foundation for the redesigning plan.<br />
          <br/>  

          Then the content audit comes in. I scan all the element that have already been exist. Starting with the first page, top-to-bottom, listing all from the navigation menu to the smallest details. I evaluate the type of content under each navigatioin item. Then I classify each level and make a new sub-grouping if I find it necessary.</p>
          
        </div>
      </div>
      <div className="mt-16 md:mt-24">
        <div className="mx-6 md:mx-auto">
          <img src={BasicFlow} alt="" className="mx-auto"/>
        </div>
        <div className="mx-6 mt-8 md:mt-10 max-w-3xl md:mx-auto text-left">
          <h2 className="font-semibold text-xl md:text-2xl">Defining the Basic Flow & the Use Case</h2>
          <p className="text-lg  mt-2 font-light md:text-xl">The use case describing a step-by-step description of how users complete specifics goals. By doing this process, I'm able to define the needs and how the users try to complete that needs.<br />
          <br/> 
           
          Because a redesign attempts to solve a known issue, a use case can develop an optimized workflow that should make the experience easier  - and increase the conversion rate in some cases.<br />
          <br/> 
           
          Based on interviews, what did people find frustating about the site? I use the feedback to identify redundant or confusing steps in the process and cut them out of the use case.</p>
        </div>
      </div>
      <div className="mt-16 md:mt-24">
        <div className="mx-6 md:mx-auto">
          <img src={DashboardFlow} alt="" className="mx-auto"/>
        </div>
        <div className="mx-6 mt-8 md:mt-10 max-w-3xl md:mx-auto text-left">
          <h2 className="font-semibold text-xl md:text-2xl">Managing the Dashboard</h2>
          <p className="text-lg  mt-2 font-light md:text-xl">I design the dashboard by first defining the prioritized function. Because top left corner of screen naturally get more attention, the flow start from there. When the users finish with the first row, they will move down to the next one.<br />
          <br/> 
           
          For data that are dependence on each other and affect decision making, I make a layout that thw users do not need to go back and forth - creating a continous flow for easy scanning across the dashboard. </p>
        </div>
      </div>
      <div className="mt-16 md:mt-24">
        <div className="mx-6 md:mx-auto">
          <img src={Wireframe} alt="" className="mx-auto"/>
        </div>
        <div className="mx-6 mt-8 md:mt-10 max-w-3xl md:mx-auto text-left">
          <h2 className="font-semibold text-xl md:text-2xl">From the Wireframe to the Prototype</h2>
          <p className="text-lg  mt-2 font-light md:text-xl">The wireframing process started from the paper sketch. I like this method because it's easy to pour my ideas without too much time wasted. If any of the ideas need to change then I can simply sketch on the new page.<br />
          <br/>  

          After I have the desired concept then I translated it in the protoype software. Some minor adjusments are reasonable and as long as it keeps the original concept then it won't give a significance problem. This is where I through from low fidelity to high fidelity and fully functional prototype.</p>
        </div>
      </div>
      <div className="mt-16 md:mt-24">
        <div className="mx-6 md:mx-auto">
          <img src={OldAqimos} alt="" className="mx-auto"/>
        </div>
        <div className="mx-6 mt-8 md:mt-10 max-w-3xl md:mx-auto text-left">
          <h2 className="font-semibold text-xl md:text-2xl">The Old AQimos</h2>
          <p className="text-lg  mt-2 font-light md:text-xl">In the previous design, the web apps has several problems. First, gauge that is used to show the temperature, humidity, and battery power are shown with level gauge. This leads to minstranslation of data by the users.<br />
            <br />
           
          Upon the interview with the stakeholder, they intended to show the data with a particular time period. And some elements like the battery power is less prioritized compared to, for example, the average wind speed. So, some adjusments have to be made.<br />
            <br />
          The other problem is that the chart for air compositon took too much space. For each compsotion - there are five compositions - the chart is shown separately and used the whole device viewport. This is a case where an empire state of dashboard appear. The result, the user needs to scroll a long page to see all the data. It's both inefffective and inefficient.
          </p>
        </div>
      </div>
      <div className="mt-16 md:mt-24">
        <div className="mx-6 md:mx-auto">
          <img src={NewAqimos} alt="" className="mx-auto"/>
        </div>
        <div className="mx-6 mt-8 md:mt-10 max-w-3xl md:mx-auto text-left">
          <h2 className="font-semibold text-xl md:text-2xl">The Takeaways</h2>
          <p className="text-lg  mt-2 mb-16 font-light md:text-xl">Perhaps the most challenging part in the process of redesigning AQimos is that I have to include many elements in one viewport without prunning even one element. The interview process with the stakeholder and the content examination reveal that every element is crucial for the decision making process. Thus, the design is maximize to include every element in the best arrangement while maintaining its usability across the device.<br />
            <br />
          Access the prototoype file here: <a
                  target="_blank"
                  rel="noopener noreferrer"
              href="https://xd.adobe.com/view/1ad2a4c4-ee94-433e-ad3f-353ea59c749a-4f81/"
              className="underline text-indigo-500 hover:text-indigo-800"
                >AQimos.</a>
          </p>
        </div>
      </div>

      <div className="underline mt-3 pb-16 text-lg mx-6 max-w-3xl md:pb-24 md:mx-auto md:text-xl text-indigo-500 hover:text-indigo-800">
        <Link to="/"><a href="/">See other projects</a></Link>
      </div>
      </div> */}
      </div>
  )
}
