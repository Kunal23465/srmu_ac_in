import React from 'react'
import mapSmall from "../../assets/new-home/best-private-university-in-lucknow-uttar-pradesh-960.webp"
import map from "../../assets/new-home/best-private-university-in-lucknow-uttar-pradesh.webp"
import Classes from "../../utils/styles/Global.module.css";
const Map: React.FC = () => {
  return (
    <section className="bg-[#0F4A85] ">
      <div className={`${Classes["container"]} py-8 md:py-10 lg:py-12`}>
        <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-white flex flex-col leading-tight md:leading-tight break-words min-w-0">
          Discover Opportunities, Ignite Your Potential, Be a Part of
          <span className="text-[#FFC107] text-sm md:text-2xl lg:text-3xl block">Shri Ramswaroop Memorial University , Uttar Pradesh</span>
        </h2>

        <div className="mt-5 md:mt-8 w-full">


          <div className=" overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
            <a className='cursor-pointer ' href="https://maps.app.goo.gl/vSNyWkPssAdfDpkV8" target="_blank" rel="noopener noreferrer">
              <img
                src={mapSmall}
                srcSet={`${mapSmall} 960w, ${map} 1920w`}
                sizes="(min-width: 1280px) 1200px, 100vw"
                alt="Map"
                loading="lazy"
                decoding="async"
                width={960}
                height={465}
                className="w-full h-full max-h-[300px] object-center object-cover hover:scale-105"
              />
            </a>
            {/* <iframe
              title="Uttar Pradesh, India"
              src="https://maps.google.com/maps?q=Uttar+Pradesh,+India&t=&z=6&ie=UTF8&iwloc=B&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block w-full h-[120px] sm:h-[200px] max-h-[200px] border-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Map
