
export interface Tab {
  name?: string;
  icon?: JSX.Element;
  link?: string;
  grayArrowDown?: JSX.Element;
  whiteArrowDown?: JSX.Element;
  ActiveIcon?: JSX.Element;
  menus?: MenuItem[];
}

export interface MenuItem {
  name: string;
  link: string;
}
