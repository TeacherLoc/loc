/* hieu ứng ảnh vào ra của thanh menu */
const onbar = document.querySelector(".on-bar")
onbar.addEventListener("click",function(){

 onbar.classList.toggle("active")
 document.querySelector(".menu-home").classList.toggle("active")
        
})
/* hieu ứng parallax */
const toP = document.querySelector(".top")
window.addEventListener("scroll-x",function(){
    const x = this.pageXOffset;
    if(x>80){toP.classList.add("active")}
    else{toP.classList.remove("active")}
})

/* tao hiệu ứng cho bm */

let anchorlinks = document.querySelectorAll('a[href^="#"]')
for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
    let hashval = item.getAttribute('href')
    let target = document.querySelector(hashval)
    target.scrollIntoView({
      behavior: 'smooth'
    })
    history.pushState(null, null, hashval)
    e.preventDefault()
  })
}