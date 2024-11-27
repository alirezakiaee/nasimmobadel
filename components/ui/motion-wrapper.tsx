import { m } from 'framer-motion';
import { useHasMounted } from '@/hooks/useHasMounted';

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function MotionWrapper({ children, className = '', delay = 0 }: MotionWrapperProps) {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </m.div>
  );
}
