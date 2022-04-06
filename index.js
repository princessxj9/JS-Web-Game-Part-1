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
newImage('assets/sword.png', 500, 405)
newImage('assets/staff.png' ,165, 185)
newImage('assets/sheild.png' ,600, 100)

function newItem(url, left, bottom){
let object = newImage(left, url, bottom)
object.addEventListener('dblclick', () => {
 object.remove()
})
}