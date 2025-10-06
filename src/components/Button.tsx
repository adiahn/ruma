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
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-slate-900 text-white hover:bg-slate-700 active:bg-slate-950 focus:ring-slate-500 shadow-md hover:shadow-lg active:scale-95',
    secondary: 'bg-white text-slate-900 border-2 border-slate-200 hover:bg-slate-100 hover:border-slate-300 active:bg-slate-200 focus:ring-slate-500 shadow-md hover:shadow-lg active:scale-95',
    outline: 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white active:bg-slate-950 focus:ring-slate-500 active:scale-95',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (to) {
    return (
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="inline-block"
      >
        <Link to={to} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }
  
  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="inline-block"
      >
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </motion.div>
    );
  }
  
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
