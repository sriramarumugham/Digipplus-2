import { MenuItem } from "./index";
import { menu } from "../data/index";

function renderMenuList(data) {
  return (
    <ul className="menuList">
      {data.map(function (item, index) {
        return (
          <MenuItem
            key={index}
            name={item.name}
            logo={item.logo}
            path={item.path}
          />
        );
      })}
    </ul>
  );
}

function MobileMenu({showMenu, setShowMenu}) {
  return (
    <>
      <div className="mobileMenu">
        <div className="menuSession">
          <div className="menuHeading">
            <h1>
              <i
                class="fa-solid fa-bars"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              ></i>{" "}
              Digiplus
            </h1>
          </div>
          {renderMenuList(menu[0].menu_items)}
        </div>

        <div className="menuSession">
          <div className="menuHeading">
            <h1></h1>
          </div>
          {renderMenuList(menu[1].menu_items)}
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
