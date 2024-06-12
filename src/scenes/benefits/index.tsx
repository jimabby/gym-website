import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Our state-of-the-art facilities are designed to cater to all your health"+
     "and wellness needs, providing an unparalleled experience that combines comfort, "+
     "innovation, and efficiency."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Our extensive range of classes ensures that there is something for everyone, "+
      "whether you are looking to burn calories, build strength, improve flexibility, or simply have fun."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Experts and Pro Trainers",
    description: " Our team of experts and pro trainers bring a wealth of knowledge, experience, and "+
      "passion to every class and training session, ensuring you receive the highest level of guidance "+
      "and support."
  }
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2}
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        {/* HEADER */}
        <motion.div 
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 1}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0},
          }}
          >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to get
            you to our ultimate fitness goals with ease. We provide true care into
            ach other and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div 
          className="mt-5 items-center justify-between md:flex gap-8"
          initial = "hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          variants={container}
          >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage} />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHICS */}
          <img className="mx-auto" alt="benefits-page-graphic" src={BenefitsPageGraphic}/>

          {/* DESCIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true, amount: 1}}
                  transition={{duration: 0.5}}
                  variants={{
                    hidden: {opacity: 0, x: 50},
                    visible: {opacity: 1, x: 0},
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 1}}
              transition={{delay: 0.2, duration: 0.5}}
              variants={{
                hidden: {opacity: 0, x: 50},
                visible: {opacity: 1, x: 0},
              }}
              >
              <p className="my-5">
                Welcome to a community where fitness meets happiness! At EVOGYM, we believe in more than just 
                working out — we believe in transforming lives.
              </p>
              <p className="mb-5">
                Our mission is to empower individuals like you to achieve your fitness goals while enjoying 
                every step of the journey. With millions of happy members already seeing results, we invite 
                you to be part of this incredible movement.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  )
}

export default Benefits
