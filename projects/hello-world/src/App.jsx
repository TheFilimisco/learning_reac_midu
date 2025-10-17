import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App () {
    const formatUserName = (userName) => `@${userName}`
    const [getName, setName] = useState('TheFilimisco');

    const users = [
        {userName: 'TheFilimisco', name: 'Filimisco', isFollowing: true},
        {userName: 'thelucho', name: 'Lucho', isFollowing: false},
        {userName: 'janedoe', name: 'Jane Doe', isFollowing: true},
        {userName: 'johndoe', name: 'John Doe', isFollowing: false}
    ]

    return (
        <section className="App">

            {/* Manual Form */}

            <TwitterFollowCard formatUserName={formatUserName} userName={getName} name={"TheFilimisco"} initialIsFollowing >
                {/* Here you can find  <strong>{children}</strong>  */}
                <span>TheFilimisco</span>
             </TwitterFollowCard>
                
            <TwitterFollowCard formatUserName={formatUserName} userName={"thelucho"} name={"Lucho"} isFollowing={false}>
                <span>Lucho</span>
            </TwitterFollowCard>

            <button onClick={() => setName('NuevoNombre')}>
                Change Lucho's Name to NewName
            </button>

            {/* Dynamic Form */}
            {
            users.map(({userName, name, isFollowing}) => (              
                    <TwitterFollowCard
                        key={userName} /* Something never repeat */
                        formatUserName={formatUserName} 
                        userName={userName} 
                        name={name} 
                        initialIsFollowing={isFollowing}
                    >
                        <span>{name}</span>
                    </TwitterFollowCard>
                )
            )
            }

            <button onClick={() => setName('NuevoNombre')}>
                Change Lucho's Name to NewName
            </button>

        </section>
    )
}   

