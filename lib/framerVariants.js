export const titleVariants = {
  initialState: { filter: "blur(10px)", opacity: 0, scale: 0.75, x: -250 },
  finalState: {
    filter: "blur(0px)",
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.33,
    },
  },
};
export const frameVariants = {
  initialState: { filter: "blur(10px)", opacity: 0, y: 100 },
  finalState: {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.33,
    },
  },
};
export const planetVariants = {
  initialState: { filter: "blur(10px)", opacity: 0, scale: 0.1, y: 500 },
  finalState: {
    filter: "blur(0px)",
    opacity: 1,
    scale: 1.25,
    y: 0,
    transition: {
      duration: 1,
    //   delay: 0.25,
    },
  },
};
export const linksMenuVariants = {
  initialState: { filter: "blur(10px)", opacity: 0, y: 200 },
  finalState: {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.33,
    //   delay: 0.25,
    },
  },
};

export const buttonVariants = {
    initialStateFromUp: {
      opacity: 0,
      y: -80,
      scale: 0.5,
    },
    initialStateFromDown: {
      opacity: 0,
      y: 80,
      scale: 0.5,
    },
    initialStateFromLeft: {
      opacity: 0,
      x: -80,
      scale: 0.5,
    },
    initialStateFromRight: {
      opacity: 0,
      x: 80,
      scale: 0.5,
    },
    initialStateFromcenter: {
      opacity: 0,
      scale: 0.1,
    },
  
    finalState: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };
export const imgVariants = {
    initialStateFromUp: {
      opacity: 0,
      y: -120,
    },
    initialStateFromDown: {
      opacity: 0,
      y: 120,
    },
    initialStateFromLeft: {
      opacity: 0,
      x: -120,
    },
    initialStateFromRight: {
      opacity: 0,
      x: 120,
    },
    initialStateFromcenter: {
      opacity: 0,
    },
  
    finalState: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: "easeInOut",
      },
    },
  };

  export const textFrameVariants = {
    initialStateFromLeft: {
      opacity: 0,
      x: -80,
      scale: 0.9,
    },
    initialStateFromRight: {
      opacity: 0,
      x: 80,
      scale: 0.9,
    },
    initialStateFromBottom: {
      opacity: 0,
      y: 80,
      scale: 0.9,
    },
    finalState: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };
