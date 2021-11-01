const lobby = () => {
  return(
    <div className = "mx-auto">
      <header className= "header d-flex">
      <div className = "mainpage">
      <div className="main-title d-flex">
        <h1>환</h1>
        <h2>전</h2>
        <h1>장</h1>
        <h4>터</h4>
      </div>
    </div>
      </header>
      <nav className= "menu position-fixed">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      </nav>
      <div className= "content">contain</div>
    </div>
  )
}

export default lobby;