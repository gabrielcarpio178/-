const btn_yes = document.getElementById("yes");
const btn_no = document.getElementById("no");
const image_src = document.getElementById("img");
let height_no = 45;
let width_no = 90;
let height_yes = 55;
let width_yes = 110;
let font_no = 18;
let font_yes = 22;
let image = 2;
btn_yes.addEventListener('click',()=>{
    image_src.src=`images/12.gif`;
    btn_no.style.display = `none`;
})

btn_no.addEventListener('click',()=>{ 
   image_src.src=`images/${image}.gif`;
   btn_no.style.width = `${width_no}px`; 
   btn_no.style.height = `${height_no}px`;
   btn_no.style.fontSize = `${font_no}px`; 
   btn_yes.style.width = `${width_yes}px`; 
   btn_yes.style.height = `${height_yes}px`  
   btn_yes.style.fontSize = `${font_yes}px`;  
   height_no=height_no-5;
   width_no=width_no-10;
   height_yes=height_yes+10;
   width_yes=width_yes+10;
   font_no = font_no-2;
   font_yes = font_yes+2;
   image++;
})
