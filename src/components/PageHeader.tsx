function PageHeader(): JSX.Element {
  return (
    <header>
      <div className="title">
        <img
          className="icon-left"
          src="./static/icon.svg"
          alt="fishtank icon"
        />
        <h1>Fish Tank</h1>
      </div>
      <nav>
        <p>Library</p>
        <img
          className="icon-right"
          src="./static/userIcon.svg"
          alt="user icon"
        />
      </nav>
    </header>
  );
}

export default PageHeader;
