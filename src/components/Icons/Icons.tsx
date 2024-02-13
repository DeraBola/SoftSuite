export type IconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
  shuffle: (props: IconProps) => (
    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10.75 1.5L12.625 3.375L10.75 5.25M1.375 3.375H2.87312C3.37558 3.37504 3.87061 3.49623 4.31626 3.7283C4.7619 3.96037 5.14502 4.29648 5.43313 4.70813L7.94187 8.29187C8.22998 8.70352 8.6131 9.03963 9.05874 9.2717C9.50439 9.50377 9.99942 9.62496 10.5019 9.625H12.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  ),
  arrowDown: (props: IconProps) => (
    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1.33329 1.1665L5.99996 5.83317L10.6666 1.1665" stroke="#2D416F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  ),
  dashboard: (props: IconProps) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.59996 10.2246C6.77496 10.2246 7.71663 11.1754 7.71663 12.3588V15.1996C7.71663 16.3746 6.77496 17.3329 5.59996 17.3329H2.78329C1.61663 17.3329 0.666626 16.3746 0.666626 15.1996V12.3588C0.666626 11.1754 1.61663 10.2246 2.78329 10.2246H5.59996ZM15.2167 10.2246C16.3834 10.2246 17.3334 11.1754 17.3334 12.3588V15.1996C17.3334 16.3746 16.3834 17.3329 15.2167 17.3329H12.4C11.225 17.3329 10.2834 16.3746 10.2834 15.1996V12.3588C10.2834 11.1754 11.225 10.2246 12.4 10.2246H15.2167ZM5.59996 0.666504C6.77496 0.666504 7.71663 1.62484 7.71663 2.80067V5.6415C7.71663 6.82484 6.77496 7.77484 5.59996 7.77484H2.78329C1.61663 7.77484 0.666626 6.82484 0.666626 5.6415V2.80067C0.666626 1.62484 1.61663 0.666504 2.78329 0.666504H5.59996ZM15.2167 0.666504C16.3834 0.666504 17.3334 1.62484 17.3334 2.80067V5.6415C17.3334 6.82484 16.3834 7.77484 15.2167 7.77484H12.4C11.225 7.77484 10.2834 6.82484 10.2834 5.6415V2.80067C10.2834 1.62484 11.225 0.666504 12.4 0.666504H15.2167Z" fill="#818DA9"/>
    </svg>
  ),
  activity: (props: IconProps) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.8747 2.15009C11.8414 2.35842 11.8247 2.56675 11.8247 2.77509C11.8247 4.65009 13.3414 6.16592 15.2081 6.16592C15.4164 6.16592 15.6164 6.14175 15.8247 6.10842V12.8326C15.8247 15.6584 14.1581 17.3334 11.3247 17.3334H5.16722C2.33305 17.3334 0.666382 15.6584 0.666382 12.8326V6.66675C0.666382 3.83342 2.33305 2.15009 5.16722 2.15009H11.8747ZM12.0422 7.21675C11.8164 7.19175 11.5922 7.29175 11.458 7.47509L9.44222 10.0834L7.13305 8.26676C6.99138 8.15842 6.82472 8.11592 6.65805 8.13342C6.49222 8.15842 6.34222 8.24926 6.24138 8.38259L3.77555 11.5918L3.72472 11.6668C3.58305 11.9326 3.64972 12.2743 3.89972 12.4584C4.01638 12.5334 4.14138 12.5834 4.28305 12.5834C4.47555 12.5918 4.65805 12.4909 4.77472 12.3334L6.86638 9.64092L9.24138 11.4251L9.31638 11.4743C9.58305 11.6159 9.91638 11.5501 10.108 11.2993L12.5164 8.19175L12.4831 8.20842C12.6164 8.02509 12.6414 7.79175 12.5497 7.58342C12.4589 7.37509 12.258 7.23342 12.0422 7.21675ZM15.3248 0.666504C16.4331 0.666504 17.3331 1.5665 17.3331 2.67484C17.3331 3.78317 16.4331 4.68317 15.3248 4.68317C14.2165 4.68317 13.3165 3.78317 13.3165 2.67484C13.3165 1.5665 14.2165 0.666504 15.3248 0.666504Z" fill="#818DA9"/>
    </svg>

  ),
  structure: (props: IconProps) => (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.8125 11.1875L11.75 11.1875L11.75 10.25C11.75 9.91848 11.6183 9.60054 11.3839 9.36612C11.1495 9.1317 10.8315 9 10.5 9L5.5 9C5.16848 9 4.85054 9.1317 4.61612 9.36612C4.3817 9.60054 4.25 9.91848 4.25 10.25L4.25 11.1875L5.1875 11.1875C5.51902 11.1875 5.83696 11.3192 6.07138 11.5536C6.3058 11.788 6.4375 12.106 6.4375 12.4375L6.4375 15.5625C6.4375 15.894 6.3058 16.212 6.07138 16.4464C5.83696 16.6808 5.51902 16.8125 5.1875 16.8125L2.0625 16.8125C1.73098 16.8125 1.41304 16.6808 1.17862 16.4464C0.944196 16.212 0.812499 15.894 0.812499 15.5625L0.812499 12.4375C0.812499 12.106 0.944196 11.788 1.17862 11.5536C1.41304 11.3192 1.73098 11.1875 2.0625 11.1875L3 11.1875L3 10.25C3.00206 9.58759 3.26611 8.9529 3.73451 8.48451C4.2029 8.01611 4.83759 7.75206 5.5 7.75L7.375 7.75L7.375 5.5625L6.75 5.5625C6.41848 5.5625 6.10054 5.4308 5.86612 5.19638C5.6317 4.96196 5.5 4.64402 5.5 4.3125L5.5 1.8125C5.5 1.48098 5.6317 1.16304 5.86612 0.928616C6.10054 0.694196 6.41848 0.5625 6.75 0.5625L9.25 0.5625C9.58152 0.5625 9.89946 0.694196 10.1339 0.928616C10.3683 1.16304 10.5 1.48098 10.5 1.8125L10.5 4.3125C10.5 4.64402 10.3683 4.96196 10.1339 5.19638C9.89946 5.4308 9.58152 5.5625 9.25 5.5625L8.625 5.5625L8.625 7.75L10.5 7.75C11.1624 7.75206 11.7971 8.01611 12.2655 8.48451C12.7339 8.9529 12.9979 9.58759 13 10.25L13 11.1875L13.9375 11.1875C14.269 11.1875 14.587 11.3192 14.8214 11.5536C15.0558 11.788 15.1875 12.106 15.1875 12.4375L15.1875 15.5625C15.1875 15.894 15.0558 16.212 14.8214 16.4464C14.587 16.6808 14.269 16.8125 13.9375 16.8125L10.8125 16.8125C10.481 16.8125 10.163 16.6808 9.92862 16.4464C9.6942 16.212 9.5625 15.894 9.5625 15.5625L9.5625 12.4375C9.5625 12.106 9.6942 11.788 9.92862 11.5536C10.163 11.3192 10.481 11.1875 10.8125 11.1875Z" fill="#818DA9"/>
    </svg>

  ),
  grayArrowDown: (props: IconProps) => (
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.8333 1.0835L6.99996 6.91683L1.16663 1.0835" stroke="#818DA9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  ),
  whiteArrowUp: (props: IconProps) => (
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.16671 6.9165L7.00004 1.08317L12.8334 6.9165" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  ),
  settings: (props: IconProps) => (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.59761 0.666992C9.22781 0.666992 9.79841 1.01699 10.1135 1.53366C10.2668 1.78366 10.369 2.09199 10.3435 2.41699C10.3264 2.66699 10.4031 2.91699 10.5393 3.15033C10.9737 3.85866 11.936 4.12533 12.6854 3.72533C13.5286 3.24199 14.5931 3.53366 15.0785 4.35866L15.6491 5.34199C16.1431 6.16699 15.8705 7.22533 15.0189 7.70033C14.295 8.12533 14.0395 9.06699 14.4739 9.78366C14.6101 10.0087 14.7634 10.2003 15.0019 10.317C15.2999 10.4753 15.5299 10.7253 15.6917 10.9753C16.0068 11.492 15.9812 12.1253 15.6747 12.6837L15.0785 13.6837C14.7634 14.217 14.1758 14.5503 13.5711 14.5503C13.2731 14.5503 12.9409 14.467 12.6684 14.3003C12.447 14.1587 12.1915 14.1087 11.919 14.1087C11.0759 14.1087 10.369 14.8003 10.3435 15.6253C10.3435 16.5837 9.55995 17.3337 8.58057 17.3337H7.42236C6.43446 17.3337 5.65096 16.5837 5.65096 15.6253C5.63393 14.8003 4.92708 14.1087 4.08396 14.1087C3.80292 14.1087 3.54743 14.1587 3.33453 14.3003C3.062 14.467 2.72135 14.5503 2.4318 14.5503C1.81862 14.5503 1.231 14.217 0.915894 13.6837L0.328268 12.6837C0.0131649 12.142 -0.00386769 11.492 0.311236 10.9753C0.447497 10.7253 0.702986 10.4753 0.992541 10.317C1.231 10.2003 1.38429 10.0087 1.52907 9.78366C1.95488 9.06699 1.69939 8.12533 0.975508 7.70033C0.132393 7.22533 -0.140129 6.16699 0.345301 5.34199L0.915894 4.35866C1.40984 3.53366 2.46586 3.24199 3.31749 3.72533C4.05841 4.12533 5.02076 3.85866 5.45509 3.15033C5.59135 2.91699 5.668 2.66699 5.65096 2.41699C5.63393 2.09199 5.72761 1.78366 5.88942 1.53366C6.20452 1.01699 6.77512 0.683659 7.39681 0.666992H8.59761ZM8.00998 6.65033C6.67292 6.65033 5.59135 7.70033 5.59135 9.00866C5.59135 10.317 6.67292 11.3587 8.00998 11.3587C9.34704 11.3587 10.4031 10.317 10.4031 9.00866C10.4031 7.70033 9.34704 6.65033 8.00998 6.65033Z" fill="white"/>
    </svg>
  ),
  profile: (props: IconProps) => (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.95756 9.11651C12.8169 9.11651 15.2583 9.56982 15.2583 11.3838C15.2583 13.197 12.8326 13.6668 9.95756 13.6668C7.09825 13.6668 4.65678 13.2135 4.65678 11.4003C4.65678 9.58633 7.08258 9.11651 9.95756 9.11651ZM14.5293 8.02423C15.6224 8.00396 16.7976 8.15406 17.2319 8.26064C18.1519 8.44151 18.7571 8.81076 19.0078 9.34737C19.2197 9.78792 19.2197 10.299 19.0078 10.7388C18.6242 11.5711 17.3878 11.8383 16.9073 11.9073C16.8081 11.9224 16.7282 11.836 16.7387 11.7362C16.9842 9.42992 15.0314 8.33644 14.5263 8.08502C14.5046 8.07376 14.5002 8.0565 14.5024 8.04599C14.5039 8.03849 14.5129 8.02648 14.5293 8.02423ZM5.26553 8.02267L5.47137 8.02453C5.48779 8.02678 5.496 8.03879 5.49749 8.04554C5.49973 8.0568 5.49525 8.07331 5.47436 8.08532C4.96846 8.33674 3.01573 9.43022 3.26122 11.7358C3.27167 11.8363 3.19257 11.9219 3.09333 11.9076C2.6128 11.8386 1.3764 11.5714 0.992868 10.7391C0.780209 10.2986 0.780209 9.78822 0.992868 9.34767C1.24358 8.81106 1.84798 8.44181 2.768 8.26019C3.20302 8.15436 4.37749 8.00426 5.47137 8.02453L5.26553 8.02267ZM9.95756 0.333496C11.9043 0.333496 13.4653 1.90205 13.4653 3.86087C13.4653 5.81894 11.9043 7.389 9.95756 7.389C8.01081 7.389 6.44982 5.81894 6.44982 3.86087C6.44982 1.90205 8.01081 0.333496 9.95756 0.333496ZM14.7195 0.921742C16.5999 0.921742 18.0766 2.70119 17.5736 4.68328C17.2341 6.01767 16.0052 6.90402 14.636 6.868C14.4987 6.86425 14.3636 6.85149 14.233 6.82897C14.1383 6.81246 14.0905 6.70514 14.1442 6.62558C14.6666 5.85256 14.9643 4.92269 14.9643 3.92452C14.9643 2.88281 14.639 1.91166 14.0741 1.11537C14.0562 1.09061 14.0428 1.05233 14.0607 1.02381C14.0756 1.00055 14.1032 0.988537 14.1293 0.982533C14.3196 0.943507 14.5151 0.921742 14.7195 0.921742ZM5.27998 0.921667C5.48443 0.921667 5.67993 0.943432 5.87095 0.982458C5.89632 0.988462 5.92467 1.00122 5.93959 1.02374C5.95676 1.05226 5.94407 1.09053 5.92616 1.1153C5.36131 1.91158 5.03598 2.88274 5.03598 3.92444C5.03598 4.92261 5.3337 5.85249 5.85602 6.62551C5.90975 6.70506 5.86199 6.81239 5.76723 6.8289C5.6359 6.85216 5.50159 6.86417 5.3643 6.86792C3.99508 6.90395 2.76614 6.0176 2.42663 4.6832C1.92297 2.70112 3.39964 0.921667 5.27998 0.921667Z" fill="#818DA9"/>
    </svg>

  ),
  profile2: (props: IconProps) => (
    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.00004 11.6448C10.6156 11.6448 13.6667 12.2323 13.6667 14.499C13.6667 16.7665 10.5956 17.3332 7.00004 17.3332C3.38535 17.3332 0.333374 16.7457 0.333374 14.479C0.333374 12.2115 3.40453 11.6448 7.00004 11.6448ZM7.00004 0.666504C9.44929 0.666504 11.4117 2.62819 11.4117 5.07571C11.4117 7.52324 9.44929 9.48576 7.00004 9.48576C4.55162 9.48576 2.58839 7.52324 2.58839 5.07571C2.58839 2.62819 4.55162 0.666504 7.00004 0.666504Z" fill="#818DA9"/>
    </svg>
  ),
  logOut: (props: IconProps) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5134 5.1579V4.3804C11.5134 2.68457 10.1384 1.30957 8.44256 1.30957H4.38006C2.68506 1.30957 1.31006 2.68457 1.31006 4.3804V13.6554C1.31006 15.3512 2.68506 16.7262 4.38006 16.7262H8.45089C10.1417 16.7262 11.5134 15.3554 11.5134 13.6646V12.8787" stroke="#818DA9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.1747 9.01758H7.1405" stroke="#818DA9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.7344 6.58838L17.1744 9.01755L14.7344 11.4475" stroke="#818DA9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  ),
  graySettings: (props: IconProps) => (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.59761 0.666992C9.22781 0.666992 9.79841 1.01699 10.1135 1.53366C10.2668 1.78366 10.369 2.09199 10.3435 2.41699C10.3264 2.66699 10.4031 2.91699 10.5393 3.15033C10.9737 3.85866 11.936 4.12533 12.6854 3.72533C13.5286 3.24199 14.5931 3.53366 15.0785 4.35866L15.6491 5.34199C16.1431 6.16699 15.8705 7.22533 15.0189 7.70033C14.295 8.12533 14.0395 9.06699 14.4739 9.78366C14.6101 10.0087 14.7634 10.2003 15.0019 10.317C15.2999 10.4753 15.5299 10.7253 15.6917 10.9753C16.0068 11.492 15.9812 12.1253 15.6747 12.6837L15.0785 13.6837C14.7634 14.217 14.1758 14.5503 13.5711 14.5503C13.2731 14.5503 12.9409 14.467 12.6684 14.3003C12.447 14.1587 12.1915 14.1087 11.919 14.1087C11.0759 14.1087 10.369 14.8003 10.3435 15.6253C10.3435 16.5837 9.55995 17.3337 8.58057 17.3337H7.42236C6.43446 17.3337 5.65096 16.5837 5.65096 15.6253C5.63393 14.8003 4.92708 14.1087 4.08396 14.1087C3.80292 14.1087 3.54743 14.1587 3.33453 14.3003C3.062 14.467 2.72135 14.5503 2.4318 14.5503C1.81862 14.5503 1.231 14.217 0.915894 13.6837L0.328268 12.6837C0.0131649 12.142 -0.00386769 11.492 0.311236 10.9753C0.447497 10.7253 0.702986 10.4753 0.992541 10.317C1.231 10.2003 1.38429 10.0087 1.52907 9.78366C1.95488 9.06699 1.69939 8.12533 0.975508 7.70033C0.132393 7.22533 -0.140129 6.16699 0.345301 5.34199L0.915894 4.35866C1.40984 3.53366 2.46586 3.24199 3.31749 3.72533C4.05841 4.12533 5.02076 3.85866 5.45509 3.15033C5.59135 2.91699 5.668 2.66699 5.65096 2.41699C5.63393 2.09199 5.72761 1.78366 5.88942 1.53366C6.20452 1.01699 6.77512 0.683659 7.39681 0.666992H8.59761ZM8.00998 6.65033C6.67292 6.65033 5.59135 7.70033 5.59135 9.00866C5.59135 10.317 6.67292 11.3587 8.00998 11.3587C9.34704 11.3587 10.4031 10.317 10.4031 9.00866C10.4031 7.70033 9.34704 6.65033 8.00998 6.65033Z" fill="#818DA9"/>
    </svg>

  ),
};
