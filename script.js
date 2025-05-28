function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar-light.jpeg")
    img.setAttribute(
      "alt",
      "Foto de Lucas Hosokawa sorrindo, no espelho com camiseta cinza."
    )
  } else {
    img.setAttribute("src", "./assets/Avatar.jpeg")
    img.setAttribute(
      "alt",
      "Foto de Lucas Hosokawa sorrindo, usando camiseta branca."
    )
  }
}
