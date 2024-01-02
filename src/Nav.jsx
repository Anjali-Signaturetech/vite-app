import logo from "./images/logo.png"
const Nav =({children})=>{
    return (
        <div className="flex w-1260 justify-between mb-6">
            <img src={logo} />
            {children}
        </div>
    )
}
export default Nav;