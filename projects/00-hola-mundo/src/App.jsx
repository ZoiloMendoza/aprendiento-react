import React from "react"
import { TwitterFollowCard } from "./TwitterFollowCard"
import "./App.css"

const users = [
    {
        userName: 'Mendoza1',
        name:'Zoy',
        isFollowing: false
    },
    {
        userName: 'Mendoza2',
        name:'Zoy',
        isFollowing: true
    },
    {
        userName: 'Mendoza3',
        name:'Zoy',
        isFollowing: false
    }]

export function App () {
    return (
       <section className="App">
        {
            users.map( ({userName, name, isFollowing}) => {
                return (
                    <TwitterFollowCard 
                        key={userName}
                        userName={userName} 
                        name={name}
                        initialIsFollowing={isFollowing}
                    />
                )
            })
        }
       </section>
    )
}