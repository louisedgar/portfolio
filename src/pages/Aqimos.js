import React from 'react';
import AqimosDetail from "../assets/aqimos/AqimosDetail.png"
import BasicFlow from "../assets/aqimos/BasicFlow.svg"
import ContentAudit from "../assets/aqimos/ContentAudit.svg"
import DashboardFlow from "../assets/aqimos/DashboardFlow.png"
import NewAqimos from "../assets/aqimos/NewAqimos.png"
import OldAqimos from "../assets/aqimos/OldAqimos.png"
import Wireframe from "../assets/aqimos/Wireframe.png"


export default function Aqimos() {
  return (
    <div className="max-w-5xl mx-auto mt-12 text-gray-900 md:mt-20">
      <h1 className="mx-6 text-2xl font-bold md:ml-16 md:text-4xl">Aqimos</h1>
      <p className="mx-6 text-xl md:ml-16 md:text-2xl">Desktop and Mobile Web App - 2020</p>
      <div className="mt-16">
        <img src={AqimosDetail} alt="" className="mx-auto"/>
        <div className="mx-6 mt-8">
          <h2 className="font-semibold text-xl md:ml-10 md:text-2xl">Introduction</h2>
          <p className="text-lg mt-2 md:ml-10 md:text-xl">Lorem ipsum</p>
        </div>
      </div>
      <div className="mt-16">
        <img src={BasicFlow} alt="" className="mx-auto"/>
        <div className="mx-6 mt-8">
          <h2 className="font-semibold text-xl md:ml-10 md:text-2xl">Basic Flow</h2>
          <p className="text-lg mt-2 md:ml-10 md:text-xl">Lorem ipsum</p>
        </div>
      </div>
      <div className="mt-16">
        <img src={ContentAudit} alt="" className="mx-auto"/>
        <div className="mx-6 mt-8">
          <h2 className="font-semibold text-xl md:ml-10 md:text-2xl">Content Audit</h2>
          <p className="text-lg mt-2 md:ml-10 md:text-xl">Lorem ipsum</p>
        </div>
      </div>
      <div className="mt-16">
        <img src={DashboardFlow} alt="" className="mx-auto"/>
        <div className="mx-6 mt-8">
          <h2 className="font-semibold text-xl md:ml-10 md:text-2xl">Dashboard Flow</h2>
          <p className="text-lg mt-2 md:ml-10 md:text-xl">Lorem ipsum</p>
        </div>
      </div>
      <div className="mt-16">
        <img src={Wireframe} alt="" className="mx-auto"/>
        <div className="mx-6 mt-8">
          <h2 className="font-semibold text-xl md:ml-10 md:text-2xl">Wireframe</h2>
          <p className="text-lg mt-2 md:ml-10 md:text-xl">Lorem ipsum</p>
        </div>
      </div>
      <div className="mt-16">
        <img src={OldAqimos} alt="" className="mx-auto"/>
        <div className="mx-6 mt-8">
          <h2 className="font-semibold text-xl md:ml-10 md:text-2xl">Old Aqimos</h2>
          <p className="text-lg mt-2 md:ml-10 md:text-xl">Lorem ipsum</p>
        </div>
      </div>
      <div className="mt-16">
        <img src={NewAqimos} alt="" className="mx-auto"/>
        <div className="mx-6 mt-8">
          <h2 className="font-semibold text-xl md:ml-10 md:text-2xl">New Aqimos</h2>
          <p className="text-lg mt-2 md:ml-10 md:text-xl">Lorem ipsum</p>
        </div>
      </div>
      
    </div>
  )
}
