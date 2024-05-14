import { twMerge } from 'tailwind-merge'

export const IconSetting: Icon = ({ className }) => (
  <svg viewBox="0 0 36 36" className={twMerge('w-6 h-6 fill-current', className)}>
    <path d="m 23.94,18.78 c .03,-0.25 .05,-0.51 .05,-0.78 0,-0.27 -0.02,-0.52 -0.05,-0.78 l 1.68,-1.32 c .15,-0.12 .19,-0.33 .09,-0.51 l -1.6,-2.76 c -0.09,-0.17 -0.31,-0.24 -0.48,-0.17 l -1.99,.8 c -0.41,-0.32 -0.86,-0.58 -1.35,-0.78 l -0.30,-2.12 c -0.02,-0.19 -0.19,-0.33 -0.39,-0.33 l -3.2,0 c -0.2,0 -0.36,.14 -0.39,.33 l -0.30,2.12 c -0.48,.2 -0.93,.47 -1.35,.78 l -1.99,-0.8 c -0.18,-0.07 -0.39,0 -0.48,.17 l -1.6,2.76 c -0.10,.17 -0.05,.39 .09,.51 l 1.68,1.32 c -0.03,.25 -0.05,.52 -0.05,.78 0,.26 .02,.52 .05,.78 l -1.68,1.32 c -0.15,.12 -0.19,.33 -0.09,.51 l 1.6,2.76 c .09,.17 .31,.24 .48,.17 l 1.99,-0.8 c .41,.32 .86,.58 1.35,.78 l .30,2.12 c .02,.19 .19,.33 .39,.33 l 3.2,0 c .2,0 .36,-0.14 .39,-0.33 l .30,-2.12 c .48,-0.2 .93,-0.47 1.35,-0.78 l 1.99,.8 c .18,.07 .39,0 .48,-0.17 l 1.6,-2.76 c .09,-0.17 .05,-0.39 -0.09,-0.51 l -1.68,-1.32 0,0 z m -5.94,2.01 c -1.54,0 -2.8,-1.25 -2.8,-2.8 0,-1.54 1.25,-2.8 2.8,-2.8 1.54,0 2.8,1.25 2.8,2.8 0,1.54 -1.25,2.8 -2.8,2.8 l 0,0 z">
    </path>
  </svg>
)

export const IconSun: Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' className={twMerge('w-6 h-6 stroke-current fill-none stroke-2', className)}>
    <path d='M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const IconMoon: Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' className={twMerge('w-6 h-6 fill-current', className)}>
    <path d='M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
export const IconFile: Icon = ({ className }) => (
  <svg viewBox="0 0 18 16" className={twMerge('w-[18px] h-[16px] fill-current', className)}>
    <path d="M2.47187 11.0002H3.44375C3.71987 11.0002 3.94375 10.7763 3.94375 10.5002L3.97187 9.00019H5.44375C5.71987 9.00019 5.94375 8.77628 5.94375 8.50019V7.50019C5.94375 7.22406 5.71984 7.02831 5.44375 7.02831H3.97187L3.97189 5.55644C3.97189 5.28031 3.74799 5.08456 3.47189 5.08456H2.47187C2.19575 5.08456 2 5.3084 2 5.55644L1.97187 7.00019H0.5C0.223875 7.00019 0 7.22403 0 7.47206V8.47206C0 8.74819 0.223875 8.97206 0.5 8.97206H1.97187V10.5002C1.97187 10.7752 2.22375 11.0002 2.47187 11.0002ZM7 13.0002H11V12.0002H7V13.0002ZM2 13.0002H6L5.99999 12.0002H2V13.0002ZM2 4.00019H6L6.00001 3.00019H2V4.00019ZM17.9656 14.2283L17.4506 12.3011L13.6163 13.3339L14.13 15.2608C14.2715 15.7914 14.8175 16.1083 15.3456 15.9661L17.2609 15.4499C17.7906 15.3064 18.1063 14.7596 17.9656 14.2283ZM15.1406 3.63144L11.3062 4.66394L13.3616 12.3733L17.1959 11.3408L15.1406 3.63144ZM14.3687 0.73956C14.2273 0.208935 13.6812 -0.10794 13.1531 0.0342473L11.2344 0.550497C10.7063 0.692841 10.3909 1.24175 10.5325 1.77206L10.8625 3.00019H7L7.00001 4.00019H11V3.51894L11.0477 3.69765L14.882 2.66484L14.3687 0.73956Z" />
    <path opacity="0.4" d="M5 0H3C2.44937 0 2 0.449375 2 1V3H6V1C6 0.449375 5.55 0 5 0ZM2 15C2 15.5506 2.44937 16 3 16H5C5.55063 16 6 15.5506 6 15L5.99998 13H2V15ZM7 15C7 15.5506 7.44938 16 8 16H10C10.55 16 10.9719 15.55 11 15V13H7V15ZM10.5344 1.77188C10.4227 1.35281 10.6019 0.93125 10.9394 0.69875C10.8094 0.296875 10.4438 0 10 0H8C7.45 0 7 0.449375 7 1V3H10.8625L10.5344 1.77188ZM17.1938 11.3375L13.3594 12.37L13.6163 13.3334L17.4507 12.3006L17.1938 11.3375ZM14.8844 2.66625L11.05 3.69906L11.307 4.6625L15.1413 3.63L14.8844 2.66625ZM7 12H11V4H7V12Z" />
  </svg>
)
export const IconDocument: Icon = ({ className }) => (
  <svg viewBox="0 0 18 18" className={twMerge('w-[18px] h-[18px] fill-current', className)}>
    <path d="M0 4.5V15.1875C0 16.1191 0.755508 16.875 1.6875 16.875C2.61949 16.875 3.375 16.1191 3.375 15.1875V3.375H1.125C0.503789 3.375 0 3.87773 0 4.5ZM9.5625 10.125H6.1875C5.87813 10.125 5.625 10.3781 5.625 10.6875C5.625 10.9969 5.87813 11.25 6.1875 11.25H9.5625C9.87314 11.25 10.125 10.9981 10.125 10.6875C10.125 10.3781 9.87187 10.125 9.5625 10.125ZM11.8125 11.25H15.1875C15.4981 11.25 15.75 10.9981 15.75 10.6875C15.75 10.3781 15.4969 10.125 15.1875 10.125H11.8125C11.5031 10.125 11.25 10.3781 11.25 10.6875C11.25 10.9969 11.5031 11.25 11.8125 11.25ZM9.5625 13.5H6.1875C5.87813 13.5 5.625 13.7531 5.625 14.0625C5.625 14.3719 5.87813 14.625 6.1875 14.625H9.5625C9.87314 14.625 10.125 14.3731 10.125 14.0625C10.125 13.7531 9.87187 13.5 9.5625 13.5ZM15.1875 13.5H11.8125C11.5019 13.5 11.25 13.7518 11.25 14.0625C11.25 14.3731 11.5019 14.625 11.8125 14.625H15.1875C15.4981 14.625 15.75 14.3731 15.75 14.0625C15.75 13.7531 15.4969 13.5 15.1875 13.5Z" />
    <path opacity="0.4" d="M16.875 1.125H4.5C3.87773 1.125 3.375 1.62879 3.375 2.25V15.1875C3.375 16.1191 2.61949 16.875 1.6875 16.875H15.75C16.9928 16.875 18 15.8678 18 14.625V2.25C18 1.62879 17.4973 1.125 16.875 1.125ZM9.5625 14.625H6.1875C5.87813 14.625 5.625 14.3719 5.625 14.0625C5.625 13.7531 5.87813 13.5 6.1875 13.5H9.5625C9.87314 13.5 10.125 13.7518 10.125 14.0625C10.125 14.3719 9.87187 14.625 9.5625 14.625ZM9.5625 11.25H6.1875C5.87813 11.25 5.625 10.9969 5.625 10.6875C5.625 10.3781 5.87813 10.125 6.1875 10.125H9.5625C9.87187 10.125 10.125 10.3781 10.125 10.6875C10.125 10.9969 9.87187 11.25 9.5625 11.25ZM15.1875 14.625H11.8125C11.5019 14.625 11.25 14.3731 11.25 14.0625C11.25 13.7518 11.5019 13.5 11.8125 13.5H15.1875C15.4981 13.5 15.75 13.7518 15.75 14.0625C15.75 14.3719 15.4969 14.625 15.1875 14.625ZM15.1875 11.25H11.8125C11.5031 11.25 11.25 10.9969 11.25 10.6875C11.25 10.3781 11.5031 10.125 11.8125 10.125H15.1875C15.4969 10.125 15.75 10.3781 15.75 10.6875C15.75 10.9969 15.4969 11.25 15.1875 11.25ZM15.75 7.3125C15.75 7.62187 15.4969 7.875 15.1875 7.875H6.1875C5.87813 7.875 5.625 7.62187 5.625 7.3125V3.9375C5.625 3.62812 5.87813 3.375 6.1875 3.375H15.1875C15.4969 3.375 15.75 3.62812 15.75 3.9375V7.3125Z" />
  </svg>
)
export const IconChunk: Icon = ({ className }) => (
  <svg viewBox="0 0 18 18" className={twMerge('w-[18px] h-[18px] fill-current', className)}>
    <path d="M0.5625 3.375C0.5625 2.44301 1.31801 1.6875 2.25 1.6875C3.18199 1.6875 3.9375 2.44301 3.9375 3.375C3.9375 4.30664 3.18199 5.0625 2.25 5.0625C1.31801 5.0625 0.5625 4.30664 0.5625 3.375ZM3.9375 9C3.9375 9.93164 3.18199 10.6875 2.25 10.6875C1.31801 10.6875 0.5625 9.93164 0.5625 9C0.5625 8.06836 1.31801 7.3125 2.25 7.3125C3.18199 7.3125 3.9375 8.06836 3.9375 9ZM3.9375 14.625C3.9375 15.5566 3.18199 16.3125 2.25 16.3125C1.31801 16.3125 0.5625 15.5566 0.5625 14.625C0.5625 13.6934 1.31801 12.9375 2.25 12.9375C3.18199 12.9375 3.9375 13.6934 3.9375 14.625Z" />
    <path opacity="0.4" d="M5.38203 2.925L6.73203 1.9125C6.92539 1.7666 7.16094 1.6875 7.40703 1.6875H14.9059C15.3734 1.6875 15.7496 2.06543 15.7496 2.53125V4.21875C15.7496 4.68633 15.3734 5.0625 14.9059 5.0625H7.40703C7.16094 5.0625 6.92539 4.98516 6.73203 4.8375L5.38203 3.825C5.07969 3.6 5.07969 3.15 5.38203 2.925ZM7.40703 7.3125H17.1559C17.6234 7.3125 17.9996 7.68867 17.9996 8.15625V9.84375C17.9996 10.3113 17.6234 10.6875 17.1559 10.6875H7.40703C7.16094 10.6875 6.92539 10.6102 6.73203 10.4625L5.38203 9.45C5.07969 9.225 5.07969 8.775 5.38203 8.55L6.73203 7.5375C6.92539 7.38984 7.16094 7.3125 7.40703 7.3125ZM7.40703 12.9375H14.9059C15.3734 12.9375 15.7496 13.3137 15.7496 13.7812V15.4688C15.7496 15.9363 15.3734 16.3125 14.9059 16.3125H7.40703C7.16094 16.3125 6.92539 16.2352 6.73203 16.0875L5.38203 15.075C5.07969 14.85 5.07969 14.4 5.38203 14.175L6.73203 13.1625C6.92539 13.0148 7.16094 12.9375 7.40703 12.9375Z" />
  </svg>
)
export const IconPlusCircle: Icon = ({ className }) => (

  <svg viewBox="0 0 18 19" className={twMerge('w-[18px] h-[19px] fill-current', className)}>
    <path d="M8.15625 12.3438V10.0938H5.90625C5.41406 10.0938 5.0625 9.74219 5.0625 9.25C5.0625 8.79297 5.41406 8.40625 5.90625 8.40625H8.15625V6.15625C8.15625 5.69922 8.50781 5.3125 9 5.3125C9.45703 5.3125 9.84375 5.69922 9.84375 6.15625V8.40625H12.0938C12.5508 8.40625 12.9375 8.79297 12.9375 9.25C12.9375 9.74219 12.5508 10.0938 12.0938 10.0938H9.84375V12.3438C9.84375 12.8359 9.45703 13.1875 9 13.1875C8.50781 13.1875 8.15625 12.8359 8.15625 12.3438ZM18 9.25C18 14.2422 13.957 18.25 9 18.25C4.00781 18.25 0 14.2422 0 9.25C0 4.29297 4.00781 0.25 9 0.25C13.957 0.25 18 4.29297 18 9.25ZM9 1.9375C4.95703 1.9375 1.6875 5.24219 1.6875 9.25C1.6875 13.293 4.95703 16.5625 9 16.5625C13.0078 16.5625 16.3125 13.293 16.3125 9.25C16.3125 5.24219 13.0078 1.9375 9 1.9375Z" />
  </svg>
)
export const IconCaret: Icon = ({ className }) => (
  <svg viewBox="0 0 8 12" className={twMerge('w-2 h-3 fill-current', className)}>
    <path d="M5.37456 10.5C5.21465 10.5 5.05466 10.4372 4.9328 10.3117L1.18309 6.45452C0.93897 6.2034 0.93897 5.7966 1.18309 5.54548L4.9328 1.68834C5.17692 1.43722 5.5724 1.43722 5.81652 1.68834C6.06064 1.93945 6.06064 2.34626 5.81652 2.59738L2.50857 6L5.81691 9.40312C6.06103 9.65424 6.06103 10.061 5.81691 10.3122C5.69485 10.4377 5.5347 10.5 5.37456 10.5Z" />
  </svg>
)

export const IconArrow: Icon = ({ className }) => (
  <svg viewBox="0 0 10 5" className={twMerge('w-[10px] h-[5px] fill-current', className)}>
    <path d="M8.74609 1.39648L5.52148 4.64648C5.34375 4.79883 5.14062 4.875 4.9375 4.875C4.70898 4.875 4.50586 4.79883 4.35352 4.64648L1.12891 1.39648C0.875 1.16797 0.798828 0.8125 0.925781 0.507812C1.05273 0.203125 1.35742 0 1.6875 0H8.16211C8.49219 0 8.77148 0.203125 8.89844 0.507812C9.02539 0.8125 8.97461 1.16797 8.74609 1.39648Z" />
  </svg>

)

export const IconDoubleCaret: Icon = ({ className }) => (
  <svg viewBox="0 0 12 12" className={twMerge('w-3 h-3 fill-current', className)}>
    <path d="M2.85465 6.00022L6.48424 2.37042C6.75207 2.10258 6.75207 1.66868 6.48424 1.40083C6.21642 1.13299 5.78254 1.13299 5.51471 1.40083L1.40088 5.51489C1.13306 5.78273 1.13306 6.21664 1.40088 6.48448L5.51471 10.5985C5.64755 10.7335 5.82325 10.8 5.99894 10.8C6.17464 10.8 6.3499 10.733 6.4836 10.5991C6.75143 10.3312 6.75143 9.89732 6.4836 9.62948L2.85465 6.00022ZM6.96955 6.00022L10.5991 2.37042C10.867 2.10258 10.867 1.66868 10.5991 1.40083C10.3313 1.13299 9.89744 1.13299 9.62961 1.40083L5.51578 5.51489C5.24795 5.78273 5.24795 6.21664 5.51578 6.48448L9.62961 10.5985C9.76138 10.7335 9.93707 10.8 10.1128 10.8C10.2885 10.8 10.4637 10.733 10.5974 10.5991C10.8653 10.3312 10.8653 9.89732 10.5974 9.62948L6.96955 6.00022Z" />
  </svg>
)
export const IconManager: Icon = ({ className }) => (
  <svg viewBox="0 0 17 18" className={twMerge('w-[17px] h-[18px] fill-[#B5B5C3]', className)}>
    <path d="M16.1832 7.01716L14.7687 7.83395C14.9115 8.60427 14.9115 9.3945 14.7687 10.1648L16.1832 10.9816C16.3459 11.0746 16.4189 11.2672 16.3658 11.4465C15.9972 12.6285 15.3697 13.6976 14.5496 14.5875C14.4234 14.7236 14.2176 14.7568 14.0582 14.6638L12.6437 13.847C12.0494 14.3584 11.3654 14.7535 10.625 15.0125V16.6427C10.625 16.8287 10.4955 16.9914 10.3129 17.0312C9.09431 17.3035 7.84587 17.2902 6.68709 17.0312C6.50447 16.9914 6.37498 16.8287 6.37498 16.6427V15.0091C5.63787 14.7468 4.95388 14.3517 4.35623 13.8437L2.94509 14.6605C2.7824 14.7535 2.57986 14.7236 2.45369 14.5841C1.63357 13.6976 1.00603 12.6285 0.637476 11.4431C0.581031 11.2638 0.657398 11.0713 0.820093 10.9783L2.23455 10.1615C2.09177 9.39118 2.09177 8.60095 2.23455 7.83063L0.820093 7.01384C0.657398 6.92087 0.584351 6.72829 0.637476 6.549C1.00603 5.36696 1.63357 4.29782 2.45369 3.40798C2.57986 3.27185 2.78572 3.23864 2.94509 3.33161L4.35955 4.14841C4.95388 3.63708 5.63787 3.24196 6.3783 2.98298V1.34939C6.3783 1.16345 6.50779 1.00075 6.69041 0.960909C7.90896 0.688644 9.1574 0.701925 10.3162 0.960909C10.4988 1.00075 10.6283 1.16345 10.6283 1.34939V2.98298C11.3654 3.24528 12.0494 3.6404 12.647 4.14841L14.0615 3.33161C14.2242 3.23864 14.4267 3.26853 14.5529 3.40798C15.373 4.2945 16.0006 5.36364 16.3691 6.549C16.4189 6.73161 16.3459 6.92419 16.1832 7.01716ZM8.49998 6.34313C7.03572 6.34313 5.84373 7.53513 5.84373 8.99938C5.84373 10.4636 7.03572 11.6556 8.49998 11.6556C9.96423 11.6556 11.1562 10.4636 11.1562 8.99938C11.1562 7.53513 9.96423 6.34313 8.49998 6.34313Z" />
  </svg>
)
export const IconTrash: Icon = ({ className }) => (
  <svg viewBox="0 0 14 16" className={twMerge('w-[14px] h-4 fill-[#B5B5C3]', className)}>
    <path d="M1 14.5C1 14.8978 1.15804 15.2794 1.43934 15.5607C1.72064 15.842 2.10218 16 2.5 16H11.5C11.8978 16 12.2794 15.842 12.5607 15.5607C12.842 15.2794 13 14.8978 13 14.5V4.00001H1V14.5ZM9.5 6.50001C9.5 6.3674 9.55268 6.24022 9.64645 6.14645C9.74021 6.05268 9.86739 6.00001 10 6.00001C10.1326 6.00001 10.2598 6.05268 10.3536 6.14645C10.4473 6.24022 10.5 6.3674 10.5 6.50001V13.5C10.5 13.6326 10.4473 13.7598 10.3536 13.8536C10.2598 13.9473 10.1326 14 10 14C9.86739 14 9.74021 13.9473 9.64645 13.8536C9.55268 13.7598 9.5 13.6326 9.5 13.5V6.50001ZM6.5 6.50001C6.5 6.3674 6.55268 6.24022 6.64645 6.14645C6.74021 6.05268 6.86739 6.00001 7 6.00001C7.13261 6.00001 7.25979 6.05268 7.35355 6.14645C7.44732 6.24022 7.5 6.3674 7.5 6.50001V13.5C7.5 13.6326 7.44732 13.7598 7.35355 13.8536C7.25979 13.9473 7.13261 14 7 14C6.86739 14 6.74021 13.9473 6.64645 13.8536C6.55268 13.7598 6.5 13.6326 6.5 13.5V6.50001ZM3.5 6.50001C3.5 6.3674 3.55268 6.24022 3.64645 6.14645C3.74021 6.05268 3.86739 6.00001 4 6.00001C4.13261 6.00001 4.25979 6.05268 4.35355 6.14645C4.44732 6.24022 4.5 6.3674 4.5 6.50001V13.5C4.5 13.6326 4.44732 13.7598 4.35355 13.8536C4.25979 13.9473 4.13261 14 4 14C3.86739 14 3.74021 13.9473 3.64645 13.8536C3.55268 13.7598 3.5 13.6326 3.5 13.5V6.50001ZM13.5 1.00001H9.75L9.45625 0.41563C9.39402 0.290697 9.29817 0.185606 9.17947 0.11218C9.06078 0.0387537 8.92395 -9.46239e-05 8.78438 5.47897e-06H5.2125C5.07324 -0.00052985 4.93665 0.0381736 4.81838 0.111682C4.7001 0.18519 4.60492 0.290529 4.54375 0.41563L4.25 1.00001H0.5C0.367392 1.00001 0.240215 1.05268 0.146447 1.14645C0.0526784 1.24022 0 1.3674 0 1.50001L0 2.50001C0 2.63261 0.0526784 2.75979 0.146447 2.85356C0.240215 2.94733 0.367392 3.00001 0.5 3.00001H13.5C13.6326 3.00001 13.7598 2.94733 13.8536 2.85356C13.9473 2.75979 14 2.63261 14 2.50001V1.50001C14 1.3674 13.9473 1.24022 13.8536 1.14645C13.7598 1.05268 13.6326 1.00001 13.5 1.00001Z" />
  </svg>
)
export const IconCircleCheck: Icon = ({ className }) => (
  <svg width="70" height="71" viewBox="0 0 70 71" className={twMerge('w-[70px] h-[71px] fill-[#9EA5BD]', className)}>
    <path d="M33.2227 47.2344C31.7188 48.7383 29.3945 48.7383 27.8906 47.2344L19.1406 38.4844C17.6367 36.9805 17.6367 34.6562 19.1406 33.1523C20.6445 31.6484 22.9688 31.6484 24.4727 33.1523L30.625 39.168L45.3906 24.4023C46.8945 22.8984 49.2188 22.8984 50.7227 24.4023C52.2266 25.9062 52.2266 28.2305 50.7227 29.7344L33.2227 47.2344ZM70 35.75C70 55.1641 54.2773 70.75 35 70.75C15.5859 70.75 0 55.1641 0 35.75C0 16.4727 15.5859 0.75 35 0.75C54.2773 0.75 70 16.4727 70 35.75ZM35 7.3125C19.2773 7.3125 6.5625 20.1641 6.5625 35.75C6.5625 51.4727 19.2773 64.1875 35 64.1875C50.5859 64.1875 63.4375 51.4727 63.4375 35.75C63.4375 20.1641 50.5859 7.3125 35 7.3125Z" />
  </svg>
)


type Icon = ({ className }: { className?: string }) => JSX.Element