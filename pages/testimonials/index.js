//components
import TestimonialSlider from "../../components/TestimonialSlider";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          exit="hidden"
          animate="show"
          className="h2 mb-8 xl:mb-0"
        >
          What Clients <span className="text-accent">say.</span>
        </motion.h2>
        {/* Slider */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          exit="hidden"
          animate="show"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;