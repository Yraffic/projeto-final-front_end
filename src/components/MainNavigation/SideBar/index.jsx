import style from "./style.module.css"
import { ReactComponent as HomeLogo } from "../../../assets/home.svg"
import { ReactComponent as ClientLogo } from "../../../assets/client.svg"
import { ReactComponent as ChargeLogo } from "../../../assets/cobrancas.svg"
import { NavLink } from "react-router-dom"
import { Text } from "../../Text"

export function SideBar() {
  return (
    <aside className={style["sidebar"]}>
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive
            ? `${style["sidebar__item"]} ${style["sidebar__item--active"]}`
            : style["sidebar__item"]
        }
      >
        <HomeLogo />
        <Text
          type="title"
          as="span"
          color="grey-800"
          size="small"
          position="center"
          weight="medium"
          fontFamily="secondary"
        >
          Home
        </Text>
      </NavLink>
      <NavLink
        to="/clients"
        className={({ isActive }) =>
          isActive
            ? `${style["sidebar__item"]} ${style["sidebar__item--active"]}`
            : style["sidebar__item"]
        }
      >
        <ClientLogo />
        <Text
          type="title"
          as="span"
          color="grey-800"
          size="small"
          position="center"
          weight="medium"
          fontFamily="secondary"
        >
          Clientes
        </Text>
      </NavLink>
      <NavLink
        to="/charges"
        className={({ isActive }) =>
          isActive
            ? `${style["sidebar__item"]} ${style["sidebar__item--active"]}`
            : style["sidebar__item"]
        }
      >
        <ChargeLogo />
        <Text
          type="title"
          as="span"
          color="grey-800"
          size="small"
          position="center"
          weight="medium"
        >
          Cobranças
        </Text>
      </NavLink>
    </aside>
  )
}
