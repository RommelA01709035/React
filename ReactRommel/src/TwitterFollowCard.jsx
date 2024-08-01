export function TwitterFollowCard(Username) {
    return (
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img src="https://unavatar.io/duckduckgo/gummibeer.devr" alt="Avatar" />
          <div>
            <strong>{Username}</strong>
            <span>@owo</span>
          </div>
        </header>
        <aside>
          <button>
            seguir
          </button>
        </aside>
      </article>
    );
  }