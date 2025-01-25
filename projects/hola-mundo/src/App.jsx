import React from "react"
import "./App.css"
import { TwFolloCard } from "./TwFollowCard"

const users = [
    {
        name: 'juan delgado',
        userName: 'juan',
        isFollowing: true,
        id: 1
    },
    {
        name: 'pedro perez',
        userName: 'pedro',
        isFollowing: true,
        id: 2
    },
    {
        name: 'maria morena',
        userName: 'maria',
        isFollowing: false,
        id: 3
    },
    {
        name: 'sofia vergara',
        userName: 'sofia',
        isFollowing: false,
        id: 4
    }
]

export function App () {

    const formatUserName = (userFormat) => `@${userFormat}`
    return (
        <section className="App">
        {/* <TwFolloCard formatFunction = {formatUserName} isFollowing={false} name ='juan delgado'  userName='juan' />
        <TwFolloCard formatFunction = {formatUserName} isFollowing={true} name ='ramon gonzalez'  userName='ramon' /> */}
        {
            users.map ( ({name,userName,isFollowing,id}) => (
                <TwFolloCard 
                key={id}
                name ={name}  
                userName={userName}
                isFollowing={isFollowing} 
                formatFunction = {formatUserName} />        
            )
            )
        }
        </section>
    )
}