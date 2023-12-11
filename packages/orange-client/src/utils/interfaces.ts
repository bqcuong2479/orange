export interface ICommonState {
  messages: IToastMessage[]
}

export interface IToastMessage {
  content: string
  variant:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
}
