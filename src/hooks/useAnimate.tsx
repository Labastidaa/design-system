import { useCallback, useEffect, useRef } from "react";
import { stagger, useAnimate, useInView } from "framer-motion";

export const useAnimateInView = () => {
  const hasAnimatedRef = useRef(false);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  const enterAnimation = useCallback(async () => {
    if (hasAnimatedRef.current) return;

    const title = scope.current.querySelector("#Title");
    const elements = scope.current.querySelectorAll("[data-animate]");

    if (title) {
      await animate(
        title,
        { opacity: [0, 1], x: [-100, 0] },
        {
          duration: 0.6,
          delay: 0.5,
        },
      );
    }

    if (elements.length > 0) {
      await animate(
        elements,
        { opacity: [0, 1] },
        {
          duration: 0.6,
          delay: stagger(0.2, { startDelay: 0.15 }),
        },
      );
    }

    hasAnimatedRef.current = true;

    if (!hasAnimatedRef.current) {
      await animate(
        scope.current,
        { opacity: [0, 1] },
        {
          duration: 0.6,
          delay: stagger(0.2, { startDelay: 0.15 }),
        },
      );
    }

    hasAnimatedRef.current = true;
  }, [animate, scope]);

  useEffect(() => {
    if (isInView && !hasAnimatedRef.current) {
      enterAnimation();
    }

    console.log("isInView", isInView);
    console.log("hasAnimatedRef", hasAnimatedRef);
  }, [isInView, enterAnimation]);

  return { scope };
};

export const useAnimateImage = () => {
  const hasAnimatedRef = useRef(false);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  const enterAnimation = useCallback(() => {
    if (hasAnimatedRef.current) return;

    animate(
      scope.current,
      { opacity: [0, 1] },
      {
        duration: 1,
        delay: stagger(0.2, { startDelay: 0.15 }),
      },
    );

    hasAnimatedRef.current = true;
  }, [animate, scope]);

  useEffect(() => {
    if (isInView && !hasAnimatedRef.current) {
      enterAnimation();
    }
  }, [isInView, enterAnimation, scope]);

  return { scope };
};
