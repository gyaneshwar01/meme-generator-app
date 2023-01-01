import logo from "../images/troll-face.png";

export default function Header() {
  return (
    <header>
      <div className="title">
        <img src={logo} alt="" className="troll-face" />
        <h1>Meme Generator</h1>
      </div>
      <h3>React Course - Project 3</h3>
    </header>
  );
}
