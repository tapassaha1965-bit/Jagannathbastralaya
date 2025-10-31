// small shared JS: lightbox and demo form
function openLightbox(src){
  const overlay = document.createElement('div');
  overlay.style.position='fixed';
  overlay.style.inset=0;
  overlay.style.background='rgba(0,0,0,0.85)';
  overlay.style.display='flex';
  overlay.style.alignItems='center';
  overlay.style.justifyContent='center';
  overlay.style.zIndex=9999;
  const img = document.createElement('img');
  img.src = src;
  img.style.maxWidth='92%';
  img.style.maxHeight='92%';
  img.style.borderRadius='8px';
  img.style.boxShadow='0 30px 90px rgba(0,0,0,0.6)';
  overlay.appendChild(img);
  overlay.addEventListener('click', ()=> overlay.remove());
  document.body.appendChild(overlay);
}
document.addEventListener('click', function(e){
  if(e.target.matches('.gallery-grid img')) openLightbox(e.target.src);
});

function demoForm(e){
  e.preventDefault();
  const note = document.createElement('div');
  note.style.marginTop='12px';
  note.style.padding='12px';
  note.style.borderRadius='8px';
  note.style.background='rgba(40,200,80,0.06)';
  note.style.border='1px solid rgba(40,200,80,0.14)';
  note.innerText = 'Thank you — your enquiry was recorded (demo). We will contact you shortly.';
  e.target.appendChild(note);
  e.target.reset();
  setTimeout(()=> note.remove(), 6000);
}
