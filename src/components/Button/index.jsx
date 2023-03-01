import style from "./style.module.css"

export function Button({ variant = "primary", children, ...props }) {
  return (
    <button className={`${style.button} ${style[variant]}`} {...props}>
      {children}
    </button>
  )
}
