import React from 'react'
import { FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiMongodb, SiNodedotjs,SiSpringboot,SiGithub } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://www.github.com/vijay-guru" target='_blank'><SiGithub /></a>
            </span>
            <span className="bannerIcon">
              <a href='https://twitter.com/vijayguru40' target='_blank'><FaTwitter /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/vijay-guru/" target='_blank'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiSpringboot />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media