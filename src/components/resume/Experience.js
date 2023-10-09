import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         <ResumeCard
            title="Member Technical Staff"
            subTitle="Zoho Corporation - (10/2022 - Present)"
            result="Tamilnadu,IND"
            des="Working as a Backend Developer for business solution software - Zoho Books"
          />
          <ResumeCard
            title="Software Development Engineer Intern"
            subTitle="Quinbay Technologies - (07/2022 - 06/2023)"
            result="Coimbatore,IND"
            des="An Indonesian E-Commerce company (blibli.com). Had worked as a Backend dev Intern in the team that develop the product used by merchant in their physical store."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
