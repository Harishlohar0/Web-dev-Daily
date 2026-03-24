/* ================================
   GLOBAL STATE
================================ */
const canvas = document.getElementById("canvas");
const layersList = document.getElementById("layersList");

const addRectBtn = document.getElementById("add-rectangle");
const addTextBtn = document.getElementById("add-text");

const propWidth = document.getElementById("prop-width");
const propHeight = document.getElementById("prop-height");
const propColor = document.getElementById("prop-color");
const propText = document.getElementById("prop-text");
const propRotation = document.getElementById("prop-rotation");

const layerUpBtn = document.getElementById("layer-up");
const layerDownBtn = document.getElementById("layer-down");

let elements = [];
let selectedElement = null;
let dragState = null;
let resizeState = null;

/* ================================
   HELPERS
================================ */
function generateId() {
  return "el_" + Date.now() + "_" + Math.floor(Math.random() * 1000);
}

function rgbToHex(rgb) {
  if (!rgb) return "#ffffff";
  const m = rgb.match(/\d+/g);
  return "#" + m.map(x => (+x).toString(16).padStart(2, "0")).join("");
}

/* ================================
   SELECTION
================================ */
function deselectAll() {
  document.querySelectorAll(".canvas-element").forEach(el => {
    el.classList.remove("selected");
    el.querySelectorAll(".resize-handle").forEach(h => h.remove());
  });
  selectedElement = null;
}

function selectElement(el) {
  deselectAll();
  selectedElement = el;
  el.classList.add("selected");
  addResizeHandles(el);
  syncProperties();
  syncLayers();
}

/* ================================
   CREATE ELEMENT
================================ */
function createElement(type) {
  const el = document.createElement("div");
  el.className = "canvas-element";
  el.dataset.id = generateId();
  el.dataset.type = type;
  el.dataset.rotation = 0;

  el.style.left = "60px";
  el.style.top = "60px";
  el.style.width = "120px";
  el.style.height = "80px";
  el.style.background = type === "text" ? "#ffffff" : "#2563eb";

  if (type === "text") {
    el.innerText = "Text";
    el.style.display = "flex";
    el.style.alignItems = "center";
    el.style.justifyContent = "center";
    el.style.color = "#000";
  }

  el.addEventListener("mousedown", startDrag);
  el.addEventListener("click", e => {
    e.stopPropagation();
    selectElement(el);
  });

  canvas.appendChild(el);
  elements.push(el);
  updateZIndex();
  syncLayers();
}

addRectBtn.onclick = () => createElement("rectangle");
addTextBtn.onclick = () => createElement("text");

/* ================================
   DRAG
================================ */
function startDrag(e) {
  if (e.target.classList.contains("resize-handle")) return;

  dragState = {
    el: this,
    startX: e.clientX,
    startY: e.clientY,
    x: this.offsetLeft,
    y: this.offsetTop
  };

  selectElement(this);
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", stopDrag);
}

function onDrag(e) {
  if (!dragState) return;

  let x = dragState.x + (e.clientX - dragState.startX);
  let y = dragState.y + (e.clientY - dragState.startY);

  x = Math.max(0, Math.min(x, canvas.clientWidth - dragState.el.offsetWidth));
  y = Math.max(0, Math.min(y, canvas.clientHeight - dragState.el.offsetHeight));

  dragState.el.style.left = x + "px";
  dragState.el.style.top = y + "px";
}

function stopDrag() {
  dragState = null;
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", stopDrag);
}

/* ================================
   RESIZE
================================ */
function addResizeHandles(el) {
  ["nw","ne","sw","se"].forEach(pos => {
    const h = document.createElement("div");
    h.className = "resize-handle " + pos;
    h.addEventListener("mousedown", e => startResize(e, pos));
    el.appendChild(h);
  });
}

function startResize(e, pos) {
  e.stopPropagation();

  resizeState = {
    el: selectedElement,
    pos,
    startX: e.clientX,
    startY: e.clientY,
    w: selectedElement.offsetWidth,
    h: selectedElement.offsetHeight,
    x: selectedElement.offsetLeft,
    y: selectedElement.offsetTop
  };

  document.addEventListener("mousemove", onResize);
  document.addEventListener("mouseup", stopResize);
}

function onResize(e) {
  if (!resizeState) return;

  let dx = e.clientX - resizeState.startX;
  let dy = e.clientY - resizeState.startY;

  let { w, h, x, y } = resizeState;

  if (resizeState.pos.includes("e")) w += dx;
  if (resizeState.pos.includes("s")) h += dy;
  if (resizeState.pos.includes("w")) { w -= dx; x += dx; }
  if (resizeState.pos.includes("n")) { h -= dy; y += dy; }

  if (w < 30 || h < 30) return;

  resizeState.el.style.width = w + "px";
  resizeState.el.style.height = h + "px";
  resizeState.el.style.left = x + "px";
  resizeState.el.style.top = y + "px";
}

function stopResize() {
  resizeState = null;
  document.removeEventListener("mousemove", onResize);
  document.removeEventListener("mouseup", stopResize);
}

/* ================================
   PROPERTIES PANEL
================================ */
function syncProperties() {
  if (!selectedElement) return;

  propWidth.value = selectedElement.offsetWidth;
  propHeight.value = selectedElement.offsetHeight;
  propColor.value = rgbToHex(
    getComputedStyle(selectedElement).backgroundColor
  );
  propRotation.value = selectedElement.dataset.rotation || 0;

  if (selectedElement.dataset.type === "text") {
    propText.disabled = false;
    propText.value = selectedElement.innerText;
  } else {
    propText.disabled = true;
    propText.value = "";
  }
}

propWidth.oninput = () => {
  if (selectedElement) selectedElement.style.width = propWidth.value + "px";
};

propHeight.oninput = () => {
  if (selectedElement) selectedElement.style.height = propHeight.value + "px";
};

propColor.oninput = () => {
  if (selectedElement) selectedElement.style.background = propColor.value;
};

propText.oninput = () => {
  if (selectedElement?.dataset.type === "text") {
    selectedElement.innerText = propText.value;
  }
};

propRotation.oninput = () => {
  if (!selectedElement) return;
  selectedElement.dataset.rotation = propRotation.value;
  selectedElement.style.transform = `rotate(${propRotation.value}deg)`;
};

/* ================================
   LAYERS (REAL MOVE UP/DOWN)
================================ */
function updateZIndex() {
  elements.forEach((el, i) => el.style.zIndex = i + 1);
}

function syncLayers() {
  layersList.innerHTML = "";
  [...elements].reverse().forEach(el => {
    const li = document.createElement("li");
    li.textContent = el.dataset.type + " (" + el.dataset.id.slice(-4) + ")";
    if (el === selectedElement) li.classList.add("active");
    li.onclick = () => selectElement(el);
    layersList.appendChild(li);
  });
}

layerUpBtn.onclick = () => {
  if (!selectedElement) return;
  const i = elements.indexOf(selectedElement);
  if (i < elements.length - 1) {
    [elements[i], elements[i + 1]] = [elements[i + 1], elements[i]];
    updateZIndex();
    syncLayers();
  }
};

layerDownBtn.onclick = () => {
  if (!selectedElement) return;
  const i = elements.indexOf(selectedElement);
  if (i > 0) {
    [elements[i], elements[i - 1]] = [elements[i - 1], elements[i]];
    updateZIndex();
    syncLayers();
  }
};

/* ================================
   KEYBOARD
================================ */
document.addEventListener("keydown", e => {
  if (!selectedElement) return;

  let step = 5;
  let x = selectedElement.offsetLeft;
  let y = selectedElement.offsetTop;

  if (e.key === "Delete") {
    selectedElement.remove();
    elements = elements.filter(el => el !== selectedElement);
    selectedElement = null;
    syncLayers();
    return;
  }

  if (e.key === "ArrowLeft") x -= step;
  if (e.key === "ArrowRight") x += step;
  if (e.key === "ArrowUp") y -= step;
  if (e.key === "ArrowDown") y += step;

  x = Math.max(0, Math.min(x, canvas.clientWidth - selectedElement.offsetWidth));
  y = Math.max(0, Math.min(y, canvas.clientHeight - selectedElement.offsetHeight));

  selectedElement.style.left = x + "px";
  selectedElement.style.top = y + "px";
});

/* ================================
   CANVAS CLICK
================================ */
canvas.addEventListener("click", () => deselectAll());
