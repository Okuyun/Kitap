function getIndex() {
    let s = location.pathname
    let i = s.lastIndexOf('/')
    return NAMES.indexOf(s.slice(i+1))
}
function goNext() {
    let n = getIndex()
    if (n>=15) goBack(); // NAMES.length-1
    else location.pathname = "/Kitap/esma/"+NAMES[n+1]
}
function goBack() {
    location.pathname = "/Kitap/esma/"
}
function setTitle() {
    let h3 = document.body.querySelector('h3')
    // console.log(h3, h3.textContent)
    if (!h3) return
    let s = h3.textContent
    parent.document.title = s.slice(0, s.length-3)
}
function init() {
    for (let a of document.querySelectorAll('a[name]')) {
      // if (!a.name) continue
      a.href = "/Kuran/reader.html#"+a.name
      a.target = "iqra"
    }
    let div = document.createElement('div')
    div.className = 'nav'
    div.innerHTML = LINKS
    document.body.append(div)
    for (let b of document.querySelectorAll('.goBack'))
      b.onclick = goBack
    for (let b of document.querySelectorAll('.goNext'))
      b.onclick = goNext
    // if (window.title) title.innerText = document.title
    setTimeout(setTitle, 50)
}
onload = init

const LINKS = `<br><b>Paylaşalım lutfen:</b>&ensp;
<a href="https://groups.google.com/g/okuyun5/about"  target="Kuran"><img alt="https://groups.google.com/g/okuyun5" src="/Kitap/icon/email.png" style="width: 36px" /></a>
&ensp;
<a href="https://twitter.com/okuyun5"  target="Kuran"><img alt="https://twitter.com/okuyun5" src="/Kitap/icon/twitter.png" style="width: 36px" /></a>
<!-- &ensp;
<a href="https://instagram.com/okuyun.5/"  target="Kuran"><img alt="https://instagram.com/okuyun.5/" src="/Kitap/icon/instagram.png" style="width: 34px"/></a>
&ensp;
<a href="https://linkin.bio/okuyun-5"  target="Kuran"><img alt="https://linkin.bio/okuyun-5" src="/Kitap/icon/link2.png" style="width: 38px" /></a>
&ensp; <a href="https://facebook.com/okuyun5"  target="Kuran"><img alt="https://facebook.com/okuyun5" src="/Kitap/icon/facebook.png" style="width: 36px" /></a>
&ensp;
<a href="https://youtube.com/playlist?list=PLBDiqooDrruv0MDNyRbG-JBLH2CnfNxAd"  target="Kuran"><img alt="https://youtube.com/" src="/Kitap/icon/youtube.png" style="width: 38px" /></a> -->
&ensp;
<a href="https://github.com/Okuyun/"  target="Kuran"><img alt="https://github.com/Okuyun/" src="/Kitap/icon/github.webp" style="width: 40px" /></a>
&emsp;
<button class=goNext>▶</button>
`;
const NAMES = `Allah.html
Rahman.html
Malik.html
Selam.html
Mumin.html
Cebbar.html
Hallak.html
Bari.html
Aziz.html
Halim.html
Allam.html
Aliyy.html
Gafur.html
Tevvab.html
Afuv.html
Ehad.html
Vahid.html
Vehhab.html
Semi.html
Latif.html
Vedud.html
Muhyi.html
Hayy.html
Evvel.html
Zahir.html
Kadir.html
Nur.html
Kebir.html
Gani.html
Celal.html`.split('\n')
  