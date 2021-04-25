function goBack() {
    location.pathname = "/Kitap/rama/"
}
function init() {
    for (let a of document.querySelectorAll('a')) {
      if (!a.name) continue
      a.href = "/Kuran/reader.html#"+a.name
      a.target = "iqra"
    }
    for (let b of document.querySelectorAll('.goBack'))
      b.onclick = goBack
    if (window.title) title.innerText = document.title
}

onload = () => document.body.append(LINKS)
const LINKS = document.createElement('div')
LINKS.innerHTML = `<br><h3>Paylaşalım lutfen:</h3>
<p>
<a href="https://groups.google.com/g/rama30"  target="Kuran"><img alt="https://groups.google.com/g/rama30" src="/Kitap/icon/email.png" style="width: 36px" /></a>
&ensp;
<a href="https://twitter.com/okuyun5"  target="Kuran"><img alt="https://twitter.com/okuyun5" src="/Kitap/icon/twitter.png" style="width: 36px" /></a>
&ensp;
<a href="https://instagram.com/okuyun.5/"  target="Kuran"><img alt="https://instagram.com/okuyun.5/" src="/Kitap/icon/instagram.png" style="width: 34px"/></a>
&ensp;
<a href="https://linkin.bio/okuyun-5"  target="Kuran"><img alt="https://linkin.bio/okuyun-5" src="/Kitap/icon/link2.png" style="width: 38px" /></a>
<!-- &ensp; <a href="https://facebook.com/okuyun5"  target="Kuran"><img alt="https://facebook.com/okuyun5" src="/Kitap/icon/facebook.png" style="width: 36px" /></a> -->
&ensp;
<a href="https://youtube.com/playlist?list=PLBDiqooDrruv0MDNyRbG-JBLH2CnfNxAd"  target="Kuran"><img alt="https://youtube.com/" src="/Kitap/icon/youtube.png" style="width: 38px" /></a>
&ensp;
<a href="https://github.com/Okuyun/Kitap"  target="Kuran"><img alt="https://github.com/Okuyun/Kitap"" src="/Kitap/icon/github.webp" style="width: 40px" /></a>
</p>`

init()
  