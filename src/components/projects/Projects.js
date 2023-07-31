import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="V-Bus"
          des=" An Online bus ticket booking platform that leverage the tedious manual ticket booking activity for a customer.Had came up with end to end features like Admin,Employees,Route and bus management,Customer,Manage bookings,View bookings,Dashboard "
          src={projectOne}
        />
        <ProjectsCard
          title="V-Shop"
          des="An ecommerce application that has all end to end to customer journey. had implemented lising of products , reviews and ratings , add to cart feature , manipulation of products in cart , sandbox payments , search feature , responsive design and have admin journey in manipulating orders,users and products.!"
          src={projectTwo}
        />
        <ProjectsCard
          title="V-Hub"
          des="A Social media application that allows users to have relationship wih all over the people in the world. Had implemented features like authentication , live chat , creating posts , follow or unfollow friend."
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects