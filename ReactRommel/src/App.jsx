import './App.css'

export function App() {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img src="https://unavatar.io/duckduckgo/gummibeer.devr" alt="Avatar" />
        <div>
          <strong>Owo</strong>
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

