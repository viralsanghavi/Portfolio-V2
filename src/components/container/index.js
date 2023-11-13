import {riseWithFade} from "@/utils/animations";
import {motion} from "framer-motion";
import {Fragment} from "react";

const Container = ({children}) => {
  return (
    <motion.Fragment initial="initial" animate="animate">
      <motion.div
        className="max-w-screen-lg w-full mx-auto p-5 h-full"
        variants={riseWithFade}
      >
        {children}
      </motion.div>
    </motion.Fragment>
  );
};

export default Container;
