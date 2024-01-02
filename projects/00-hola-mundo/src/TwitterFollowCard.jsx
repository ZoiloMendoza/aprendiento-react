import { useState } from "react";

export function TwitterFollowCard ({userName, name}) {
    const [ isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing
        ? "tw-followCard-button is-following"
        : "tw-followCard-button"
        
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src="https://pbs.twimg.com/profile_images/1613722952599764995/3D_-HJ4y_400x400.jpg"
                    alt="avatar" 
                />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}