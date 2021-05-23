function toggleMenu(){
    let sidebartoggle = document.querySelector('.toggle');
    let dflex = document.querySelector('.d-flex');
    let sidebar = document.querySelector('.sidebar');
    sidebartoggle.classList.toggle('active');
    dflex.classList.toggle('active');
    sidebar.classList.toggle('active');
    
}

function nome() {
    var nom=window.document.getElementById('txt1')
    var res=window.document.getElementById('res')
    var nomes= String(nom.value)
    res.innerHTML=`ola ${nomes}`
}

  

