import { useState } from "react";

export function Home({ children, formatUserName, userName, name, isFollowing }) {
  const [isUserFollowing, setIsUserFollowing] = useState(isFollowing);
  const text = isUserFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isUserFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img src={`https://unavatar.io/${userName}`} alt="Avatar" />
        <div>
          {children}
          <strong>{userName}</strong>
          <span>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button
          className={buttonClassName}
          onClick={() => setIsUserFollowing(!isUserFollowing)}
        >
          {text}
        </button>
      </aside>
    </article>
  );
}
