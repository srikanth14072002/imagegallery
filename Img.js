var allimage=document.images;
console.log(allimage)
for(i=0;i<allimage.length;i++)
{
    allimage[i].src=`D:/WEB TECHONOLOGY/JAVASCRIPT/image/photos/${i}.jpg`
    allimage[i].addEventListener("click",function()
    {
        document.getElementById("yoo").style.backgroundImage=`url(${this.src})`
    })
}
