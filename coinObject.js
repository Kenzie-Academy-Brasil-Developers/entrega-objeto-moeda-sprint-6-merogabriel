const coin = {
  state: 0,

  flip: function () {
    let random = Math.floor(Math.random()*2)
    this.state = random
  },

  toString: function () {
    if(this.state !== 0){
        return 'Tails'
    }else {
        return 'Heads'
    }
  },

  toHTML: function () {
    const image = document.createElement("img")
      if(coin.toString() === 'Heads'){
          image.src = "./assets/cara.jpg"
          image.alt = "Heads"
      }else if (coin.toString() === 'Tails'){
          image.src = "./assets/coroa.jpg"
          image.alt = "Tails"
      }
      return image;
  },
}

function display20Flips() {
    const results = []
    const body = document.getElementsByTagName('body')
    const listCreate = document.createElement('ol')
    document.body.appendChild(listCreate)
    const lista = document.getElementsByTagName('ol')

    for (let i = 0; i < 20; i++){
        coin.flip()
        let resultados = document.createElement('li')

        if (coin.state === 0) {
            resultados.innerText = 'Heads'
        } else {
            resultados.innerText = 'Tails'
        }
        document.body.appendChild(resultados)
        results.push(coin.toString())
    }
    return results
}

display20Flips()

function display20Images() {
  const results = []
    for (let i = 0; i < 20; i++){
    coin.flip()
        let img = document.createElement('img')
        img.style.width = '5vw'
        img.style.height = 'vh'
        
    if (coin.state === 0) {
       img.src = './assets/cara.jpg'
    } else {
        img.src = './assets/coroa.jpg'
    }
    document.body.appendChild(img)
    results.push(coin.toHTML())
    }
    return results
}

display20Images()