import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface CounterOnScrollProps {
  end: number;
  duration?: number;
}

const CounterOnScroll: React.FC<CounterOnScrollProps> = ({ end, duration = 2 }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);

  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.floor(latest));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate(count, end, { duration });
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [count, end, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default CounterOnScroll;
