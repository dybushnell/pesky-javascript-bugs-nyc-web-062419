const p = document.createElement('p')
p.textContent =
  'When you click the following buttons, the alert should match the number on the button.'
document.body.appendChild(document.createElement('br'))
document.body.appendChild(p)
for (let i = 1; i <= 10; i++) {
  const button = document.createElement('button')
  button.textContent = 'Button ' + i

  document.body.appendChild(button)
  button.style = 'ui button'
  button.id = `${i}`

  button.onclick = function () {
    alert(`Hello from button ${i} !`)
  }
}