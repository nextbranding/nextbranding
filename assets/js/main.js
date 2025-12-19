(function(){
  // active nav
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll('a[data-nav]').forEach(a=>{
    if (a.getAttribute("href") === path){
      a.setAttribute("aria-current","page");
    }
  });

  // smooth scroll for hash links
  document.addEventListener("click", (e)=>{
    const a = e.target.closest("a");
    if(!a) return;
    const href = a.getAttribute("href") || "";
    if(href.startsWith("#")){
      const el = document.querySelector(href);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:"smooth", block:"start"});
      }
    }
  });
})();
