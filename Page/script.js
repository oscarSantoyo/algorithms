function createProduct(title, imgSrc){
    console.log(document)
    let productContainer = document.createElement('div')
    let label = document.createElement('label')
    let img = document.createElement('img')

    productContainer.className = 'product'
    img.src = imgSrc
    label.innerHTML = title
    productContainer.append(img)
    productContainer.append(label)

    document.getElementById('container').append(productContainer)
}

function main(num) {
    for(let i = 0; i<num; i++)
        createProduct(`Product ${i}`, 'https://media.glassdoor.com/sqll/1192153/scalable-press-squarelogo-1539203012007.png')
}

main(16)
