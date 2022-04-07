function newImage(left, bottom, url){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png' ,200, 300)
newImage('assets/pillar.png' ,350 , 100)
newImage('assets/crate.png', 150, 200 )
newImage('assets/well.png', 500, 425 )

function newItem(url, left, bottom){
let object = newImage(left, url, bottom)
object.addEventListener('dblclick', () => {
 object.remove()
})
}
// i was copy and patsing the 'newImage' and was going to change it to items for these three and i for got im sorry//
newItem('assets/sword.png', 500, 405)
newItem('assets/staff.png' ,165, 185)
newItem('assets/sheild.png' ,600, 100)