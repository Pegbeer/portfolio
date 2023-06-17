import React from 'react'
import AzureLogo from '../assets/images/azure-plain-wordmark.svg'
import CPlusPlusLogo from '../assets/images/cplusplus-original.svg'
import CSharp from '../assets/images/csharp-original.svg'
import Css3 from '../assets/images/css3-original.svg'

export default function LanguagesCarousel() {
  return (
    <div className="flex h-32 overflow-hidden w-screen">
      <div className="scroll-container w-full">
        <div className="scroll-content w-full flex-row justify-evenly">
          <div className="flex-none flex-shrink-0 h-24 w-24 mx-2">
            <AzureLogo className="h-full w-full object-cover"/>
          </div>
          <div className="flex-none flex-shrink-0 h-24 w-24 mx-2">
            <AzureLogo className="h-full w-full object-cover"/>
          </div>
          <div className="flex-none flex-shrink-0 h-24 w-24 mx-2">
            <AzureLogo className="h-full w-full object-cover"/>
          </div>
        </div>
      </div>
    </div>
  )
}
