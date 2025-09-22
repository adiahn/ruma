import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className = '',
  disabled = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform-gpu touch-target';
  
  const variantClasses = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-500 shadow-sm hover:shadow-md',
    secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 focus:ring-slate-500 shadow-sm hover:shadow-md',
    outline: 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white focus:ring-slate-500',
  };
  
  const sizeClasses = {
    sm: 'px-3 sm:px-4 py-2 text-xs sm:text-sm',
    md: 'px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base',
    lg: 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const MotionComponent = motion.div;

  const buttonContent = (
    <MotionComponent
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="w-full h-full flex items-center justify-center"
    >
      {children}
    </MotionComponent>
  );
  
  if (to) {
    return (
      <Link to={to} className={classes}>
        {buttonContent}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {buttonContent}
    </button>
  );
};

export default Button;
