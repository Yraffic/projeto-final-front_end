import { Text } from "../Text"
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined"
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined"
import styles from "./style.module.css"
import { useState } from "react"
import { Controller } from "react-hook-form"

export function Input({
  error,
  customOnChange,
  control,
  label,
  errorName,
  type,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false)

  if (type === "text-area") {
    return (
      <Controller
        name={props.name}
        control={control}
        render={({ field }) => {
          return (
            <label className={styles["label"]}>
              <Text
                type="span"
                as="span"
                color="grey-700"
                size="small"
                weight="medium"
              >
                {label}
              </Text>
              <textarea
                className={`${styles["input"]} ${
                  error && styles["input--error"]
                }`}
                rows="3"
                cols="50"
                type={showPassword ? "text" : type}
                {...props}
                {...field}
              />
              {error && (
                <Text
                  type="span"
                  as="span"
                  color="red-400"
                  weight="medium"
                >
                  {errorName}
                </Text>
              )}
            </label>
          )
        }}
      />
    )
  }

  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field }) => {
        return (
          <>
            {label ? (
              <label
                className={`${
                  type === "radio"
                    ? styles["label--round"]
                    : styles["label"]
                }`}
              >
                <Text
                  type="span"
                  as="span"
                  color="grey-700"
                  size="small"
                  weight="medium"
                >
                  {label}
                </Text>
                <input
                  className={`${
                    type === "radio"
                      ? styles["input--round"]
                      : styles["input"]
                  } ${error && styles["input--error"]}`}
                  type={showPassword ? "text" : type}
                  {...field}
                  {...props}
                  onChange={(e) => {
                    customOnChange && customOnChange()
                    field.onChange(e)
                  }}
                />
                {error && (
                  <Text
                    type="span"
                    as="span"
                    color="red-400"
                    weight="medium"
                  >
                    {errorName}
                  </Text>
                )}
                {type === "password" && (
                  <div
                    className={styles["eye-container"]}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <RemoveRedEyeOutlinedIcon />
                    ) : (
                      <VisibilityOffOutlinedIcon />
                    )}
                  </div>
                )}
              </label>
            ) : (
              <>
                <input
                  className={`${styles["input"]} ${
                    error && styles["input--error"]
                  }`}
                  type={showPassword ? "text" : type}
                  {...field}
                  {...props}
                  onChange={(e) => {
                    customOnChange && customOnChange()
                    field.onChange(e)
                  }}
                />
                {error && (
                  <Text
                    type="span"
                    as="span"
                    color="red-400"
                    weight="medium"
                  >
                    {errorName}
                  </Text>
                )}
                {type === "password" && (
                  <div
                    className={styles["eye-container"]}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <RemoveRedEyeOutlinedIcon />
                    ) : (
                      <VisibilityOffOutlinedIcon />
                    )}
                  </div>
                )}
              </>
            )}
          </>
        )
      }}
    />
  )
}
