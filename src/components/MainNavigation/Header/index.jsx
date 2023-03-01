import style from "./style.module.css"
import seta from "../../../assets/seta.svg"
import { Text } from "../../Text"
import { useToggle } from "../../../hooks/useToggle"
import { LogOut } from "./LogOut"
import { useLoggedUser } from "../../../hooks/useLoggedUser"
import { useLocation } from "react-router-dom"

function getInitals(name) {
  const firstName = name.split(" ")[0].split("")
  return `${firstName[0].toUpperCase()}${firstName[
    firstName.length - 1
  ].toUpperCase()}`
}

function getPathName(pathname) {
  if (pathname === "/charges") {
    return (
      <Text type="span" as="span" size="regular" color="green-200">
        Cobranças
      </Text>
    )
  } else if (pathname === "/clients") {
    return (
      <Text type="span" as="span" size="regular" color="green-200">
        Clientes
      </Text>
    )
  } else if (/^\/clients\/([^/]+)$/.test(pathname)) {
    return (
      <div className={style["wrapper_text"]}>
        <Text type="span" as="span" size="regular" color="green-200">
          Clientes
        </Text>
        <Text type="span" as="span" size="regular" color="grey-600">
          {">"}
        </Text>
        <Text type="span" as="span" size="regular" color="grey-600">
          Detalhes do cliente
        </Text>
      </div>
    )
  }
}

export function Header() {
  const [isOpen, toggle] = useToggle()
  const { pathname } = useLocation()
  const { user } = useLoggedUser()

  return (
    <header className={style["header"]}>
      <div
        className={`${style["header__content"]} ${
          pathname !== "/home" && style["header__content--end"]
        }`}
      >
        {pathname === "/home" ? (
          <Text
            type="title"
            as="h1"
            size="extra-large"
            pointer
            color="grey-800"
            weight="medium"
          >
            Resumo das cobranças
          </Text>
        ) : (
          getPathName(pathname)
        )}

        <div className={style["header__log_out"]}>
          <div className={style["header__log_out__content"]}>
            <Text
              type="title"
              as="h1"
              size="large"
              color="green-200"
              weight="medium"
            >
              {getInitals(user.userData.nome)}
            </Text>
          </div>
          <Text
            type="title"
            as="h2"
            size="medium"
            color="green-200"
            weight="medium"
          >
            {user?.userData?.nome.split(" ")[0]}
          </Text>
          <div className={style["wrapper_image"]} onClick={toggle}>
            <img
              className={style["wrapper_image__item"]}
              src={seta}
              alt="seta"
            />
            {isOpen && <LogOut />}
          </div>
        </div>
      </div>
    </header>
  )
}
