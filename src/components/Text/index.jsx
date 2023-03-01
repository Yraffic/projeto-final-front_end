import style from "./style.module.css"

export function Text({
  as: Component = "p",
  type,
  size,
  position,
  fontFamily,
  weight,
  children,
  color,
  decoration,
  pointer,
  className,
}) {
  return (
    <Component
      className={`${style[type]} ${className && className}`}
      style={{
        fontSize: size && `var(--size-${size})`,
        fontFamily: fontFamily && `var(--font-${fontFamily})`,
        textAlign: position,
        fontWeight: weight && `var(--font-weight-${weight})`,
        color: color && `var(--${color})`,
        textDecoration: decoration,
        cursor: pointer && "pointer",
      }}
    >
      {children}
    </Component>
  )
}
