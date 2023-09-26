export interface IRegisterUser {
  userName: string
  email: string
  password: string
  firstName: string
  lastName: string
  mobile: string
  address: string
}

// export interface ILoginUser {
//   userName: string
//   password: string
// }
export interface ILoginUser {
  email: string
  userName: string
  token: string
}

