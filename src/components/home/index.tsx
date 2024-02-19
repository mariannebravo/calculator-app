import ThemeSwitcher from "../ThemeSwitcher";

import s from "./home.module.scss";

export default function Homescreen() {
  return (
    <div className={s.home}>
      <ThemeSwitcher
        onSelectFirstTheme={(e) => console.log(e)}
        onSelectSecondTheme={(e) => console.log(e)}
        onSelectThirdTheme={(e) => console.log(e)}
      />
    </div>
  );
}
