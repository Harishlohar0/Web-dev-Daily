import { Rnd } from "react-rnd";
import "./window.scss";
import { useWindow } from "../Context/WindowContext";

export default function Window({
  children,
  width = "40vw",
  height = "30vw",
  name
}) {
  const { closeWindow } = useWindow();

  return (
    <Rnd
      default={{
        x: 450,
        y: 100,
        width: width,
        height: height,
      }}
      dragHandleClassName="nav"
      enableResizing={{
        top: true,
        right: true,
        bottom: true,
        left: true,
        topRight: true,
        bottomRight: true,
        bottomLeft: true,
        topLeft: true,
      }}
      resizeHandleClasses={{
        top: "resize-top",
        right: "resize-right",
        bottom: "resize-bottom",
        left: "resize-left",
        topRight: "resize-tr",
        bottomRight: "resize-br",
        bottomLeft: "resize-bl",
        topLeft: "resize-tl",
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            {/* CLOSE */}
            <div
              onClick={() => closeWindow(name)}
              className="dot red">
                <i class="ri-close-line win-btn r-btn"></i>
              </div>

            {/* MINIMIZE (future use) */}
            <div className="dot yellow">
              <i class="ri-subtract-line win-btn y-btn"></i>
            </div>

            {/* MAXIMIZE (future use) */}
            <div className="dot green">
              <i class="ri-checkbox-blank-line win-btn g-btn"></i>
            </div>
          </div>

          <div className="title">
            <p>harishlohar - zsh</p>
          </div>
        </div>

        <div className="main-content">
          {children}
        </div>
      </div>
    </Rnd>
  );
}
