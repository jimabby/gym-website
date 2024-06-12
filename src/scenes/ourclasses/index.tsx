import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "@/scenes/ourclasses/Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "Our Weight Training classes focus on developing muscle strength and improving overall fitness"
      +"through structured, resistance-based exercises",
    image: image1
  },
  {
    name: "Yoga Classes",
    description: "Our Yoga classes offer a serene and supportive environment to enhance your flexibility, strength,"
      +"and mental clarity.",
    image: image2
  },
  {
    name: "Ab core Classes",
    description: "Our Ab Core classes are designed to target and strengthen your abdominal muscles, improve your core"
      +" stability, and enhance overall body strength. ",
    image: image3
  },
  {
    name: "Adventure Classes",
    description: "Our Adventure Classes offer a unique and exhilarating way to stay fit, combining physical exercise with"
      +" the excitement of outdoor and adventure activities. ",
    image: image4
  },
  {
    name: "Fitness Classes",
    description: "Our fitness classes offer a diverse range of workouts designed to meet all your health and wellness needs.",
    image: image5
  },
  {
    name: "Training Classes",
    description: "Our Training Classes provide a comprehensive range of workouts designed to help you reach your fitness"
      +" goals with expert guidance and support. ",
    image: image6
  }
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
          <motion.div
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 1}}
            variants={{
              hidden: {opacity: 0, x: -50},
              visible: {opacity: 1, x: 0},
            }}
          >
            <div className="md:w-3/5">
              <HText>Our Classes</HText>
              <p className="py-5">
                Explore our diverse fitness classes tailored to your goals. Find balance and flexibility in Yoga,
                burn calories quickly with HIIT, and enjoy high-energy cycling in Spin. Strengthen your core with
                Pilates, dance and burn calories in Zumba, and build muscle with Strength Training. Challenge 
                yourself in Bootcamp's full-body workouts or sculpt muscles with Barre's ballet, Pilates, and yoga
                blend. Join us to discover the perfect class for your fitness journey!</p>
            </div>
          </motion.div>
          <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[2800px] whitespace-nowrap">
              {classes.map((item: ClassType, index) => (
                <Class
                  key= {`${item.name}-${index}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  />
              ))}
            </ul>
          </div>
      </motion.div>
    </section>
  )
}

export default OurClasses
