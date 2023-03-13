import "./Nav.css"
import Cart from "./Cart"
import Profile from "./Profile"

export default function Nav({links, itemAmount}) {
    
    //console.log(links);
    return (
        <header>
            <ul className="links">
                {
                    links.map((link) => {
                        return(
                            <li key={link.name}><a href={link.link}>{link.name}</a></li>
                        )
                    })
                }
            
            </ul>
            <div className="logos">
                <Cart itemAmount={itemAmount}/>
                <Profile/>
            </div>
        </header>
    )
}