import React from 'react'

function joinClasses(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const baseClass = 'button'
  const variants = {
    primary: 'button-primary',
    secondary: 'button-secondary',
  }

  const finalClass = joinClasses(baseClass, variants[variant] || variants.primary, className)

  if (href) {
    return (
      <a href={href} className={finalClass} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={finalClass} {...props}>
      {children}
    </button>
  )
}
