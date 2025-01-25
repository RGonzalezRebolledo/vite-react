import { useState } from "react"

export function TwFolloCard ({ isFollowing, name, userName, formatFunction}) {

     const [initIsFollowing, setInitFollowing] = useState (isFollowing)

    const textFollowing = initIsFollowing ? 'siguiendo' : 'seguir'
    console.log (textFollowing)
    const buttonClassName = initIsFollowing ? 'tw-followCard-button isFollowing' :
    'tw-followCard-button'
    console.log (buttonClassName)
    console.log (isFollowing)

    const handleClick = () => {
        setInitFollowing (!initIsFollowing)
        console.log (initIsFollowing)
    } 
    
    return (
        <div className="container">
      <article className="tw-followCard">
         <header className="tw-followCard-header">
         <img 
         className="tw-followCard-avatar"
         src="https://avatars.githubusercontent.com/u/155210488?v=4" 
         alt="" />
         <div className="tw-followCard-info">
             <strong className="tw-followCard-infoUserName">{name}</strong>
             <span>{formatFunction(userName)}</span>
         </div>  
         </header>
         <aside>
             <button className={buttonClassName} onClick={handleClick} >{textFollowing}</button>
         </aside>
      </article>
      </div>
     )
}