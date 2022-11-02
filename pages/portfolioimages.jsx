import Image from "next/image";
import web1 from "../public/web1.jpeg";
import web2 from "../public/web2.jpeg";
import web3 from "../public/web3.jpeg";
import web4 from "../public/web4.jpeg";

export default function PortfolioImages() {
  return (
    <div>
      <section>
        <div>
          <h3 className="text-3xl py-1 font-semibold dark:text-gray-200">
            PortFolio
          </h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
            I am a fullstack Software Engineer with 2+ years of experience in
            the implementation of data driven web applications. I have
            experience with all stages of the software development cycle, and
            adequate knowledge of languages/technologies such as PHP,
            JavaScript, React, MySQL, HTML, CSS etc. I also have experience with
            frameworks such as Bootstrap, MaterializeCss, TailwindCss and
            Next.JS. I have experience with tools such as Git amongst others. I
            am passionate about software development. I am a fast learner and
            take pride in my ability to quickly master and apply new knowledge.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
            My objective is to join a team of very skilled and driven engineers
            that can inspire me to work and achieve beyond my current perceived
            limits, while contributing to a meaningful project and taking my
            career to the next level.
          </p>
          <hr />
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
            The projects I have recently been able to work on are listed below.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap justify-center">
          <div className="basis-1/3 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg dark:shadow-gray-600">
            <Image
              src={web1}
              className="rounded-lg object-cover "
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg dark:shadow-gray-600">
            <Image
              src={web2}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg dark:shadow-gray-600">
            <Image
              src={web3}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg dark:shadow-gray-60">
            <Image
              src={web4}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
