import { useState } from "react";

// This a code declarative
export function TwitterFollowCard ({formatUserName, children, userName, name, initialIsFollowing}) {

    //You can use props to set the initial state
    //And initialize the state only one time on execution
    //Children prop is used to pass content between the opening and closing tags of a component
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);


    //Props are read-only (immutable) 
    console.log(isFollowing);
    const imageSrc = `https://unavatar.io/${userName}`
    
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
         <article className="tw-followCard">
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar' 
                src={imageSrc} alt="" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span
                    className='tw-followed-infoUserName'
                    >{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button  
                className={isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'}
                onClick={handleClick}>
                    <span>{isFollowing ? 'Following' : 'Follow'}</span> {/*This a children of button Dad*/}
                </button>
            </aside>
        </article>
    )

}