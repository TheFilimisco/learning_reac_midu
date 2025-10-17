import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App () {
    const formatUserName = (userName) => `@${userName}`
    const [getName, setName] = useState('TheFilimisco');

    return (
        <section className="App">
             <TwitterFollowCard formatUserName={formatUserName} userName={getName} name={"TheFilimisco"} isFollowing >
                {/* Here you can find  <strong>{children}</strong>  */}
                <span>TheFilimisco</span>
             </TwitterFollowCard>
                
            <TwitterFollowCard formatUserName={formatUserName} userName={"thelucho"} name={"Lucho"} isFollowing={false}>
                <span>Lucho</span>
            </TwitterFollowCard>

            <button onClick={() => setName('NuevoNombre')}>
                Change Lucho's Name to NewName
            </button>
        </section>
    )
}   