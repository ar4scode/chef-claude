import burgerIcon from "../assets/burger-solid.svg"

export const Header = () => {
  return (
    <header>
      <img src={burgerIcon} alt="burger icon" />
      <h1>Chef Claude</h1>
    </header>
  )
}