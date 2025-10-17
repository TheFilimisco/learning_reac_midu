import { useState } from "react";

// This a code declarative
export function TwitterFollowCard ({formatUserName, children, userName, name}) {
    const [isFollowing, setIsFollowing] = useState(false);
    const text = isFollowing ? 'Following' : 'Follow';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

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
                    <strong>{children}</strong>
                    <span
                    className='tw-followed-infoUserName'
                    >{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span>{text}</span> {/*This a children of button Dad*/}
                </button>
            </aside>
        </article>
    )

}