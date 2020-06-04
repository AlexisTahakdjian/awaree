export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  if (username === `alexis` && password === `pass`) {
    return setUser({
      username: `alexis`,
      name: `Alexis Tahakdjian`,
      age: `29 ans`,
      metier: `Webdesigner`,
      email: `alexis@example.org`,
      propos: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco Ut enim adminim veniam, quis nostrud kkkkkkk Ut enim adminim veniam, quis nostrud kkkkkkk lllll lllsss ssssszzz`,
      image: `{../images/alexis.jpg}`
    })
  }

  return false
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}