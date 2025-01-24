import "./App.css"

export function App () {
    return (
       <div className="container">
     <article className="tw-followCard">
        <header className="tw-followCard-header">
        <img 
        className="tw-followCard-avatar"
        src="https://avatars.githubusercontent.com/u/155210488?v=4" 
        alt="" />
        <div className="tw-followCard-info">
            <strong className="tw-followCard-infoUserName">Ramon Gonzalez</strong>
            <span>@ramongonzalez101</span>
        </div>  
        </header>
        <aside>
            <button className="tw-followCard-button">seguir</button>
        </aside>
     </article>
     </div>
    )
}