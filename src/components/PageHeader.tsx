interface PageHeaderProps {
  setMain: React.Dispatch<React.SetStateAction<string>>;
}

function PageHeader({ setMain }: PageHeaderProps): JSX.Element {
  return (
    <header>
      <div
        className="title clickable"
        onClick={() => {
          setMain("library");
        }}
      >
        <img
          className="icon-left"
          src="./static/icon.svg"
          alt="fishtank icon"
        />
        <h1>Fish Tank</h1>
      </div>
      <nav>
        <p
          onClick={() => {
            setMain("library");
          }}
          className="clickable"
        >
          Library
        </p>
        {/* <img
          className="icon-right clickable"
          src="./static/userIcon.svg"
          alt="user icon"
        /> */}
      </nav>
    </header>
  );
}

export default PageHeader;
