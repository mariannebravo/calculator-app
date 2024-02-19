import { ChangeEvent } from "react";

import s from "./theme_switcher.module.scss";

export default function ThemeSwitcher({
  onSelectFirstTheme,
  onSelectSecondTheme,
  onSelectThirdTheme,
}: {
  onSelectFirstTheme: (_evt: ChangeEvent<any>) => void;
  onSelectSecondTheme: (_evt: ChangeEvent<any>) => void;
  onSelectThirdTheme: (_evt: ChangeEvent<any>) => void;
}) {
  return (
    <div className={s.theme_legend}>
      <div />
      <div className={s.number_spans}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>

      <div className={s.theme_title}>
        <p>THEME</p>
      </div>

      <div className={s.button_switcher_background}>
        <button onClick={(e) => onSelectFirstTheme(e)} />
        <button onClick={(e) => onSelectSecondTheme(e)} />
        <button onClick={(e) => onSelectThirdTheme(e)} />
      </div>
    </div>
  );
}
