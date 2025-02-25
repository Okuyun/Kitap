"use strict";
function makeTable() {
  function addVariant(y) {
    function getColor() {
      if (!x.rgn) return ''
      switch (x.rgn) {
        case '*': return 'yellow'
        case 'x': return ''
        default:  return 'pink'
      }
    }
      if (filter(y)) return
      let x = { ...y } //clone
      verses.add(x.cv)
      let [c, v] = x.cv.split(':')
      let color = getColor()
      let cls = color? 'class='+color : ''
      if (x.rdr.length > 7) x.rdr = x.rdr.replaceAll(' ','')
      if (x.cv == prev.cv && x.num == prev.num) {
        a.pop() //remove last entry and use it in the next
        x.rdr  = prev.rdr  +'<br>'+ x.rdr
        x.word = prev.word +'<br>'+ x.word
      } else i++
      let url = 
"https://corpuscoranicum.org/en/verse-navigator/sura/"+c+"/verse/"+v+"/variants"
      a.push(`<td>${i}
        <td><a target=iqra href="/Kuran/reader.html#v=${x.cv}">${x.cv}</a>
        <td ${cls}>${x.std}<td>${x.rdr}
        <td><a target=Kuran href="${url}">${x.word}</a>\n`)
      prev = x
  }
    let a = [], i = 0, prev = {cv:'', num:0}
    verses.clear() //global
    for (let k of VD._keys) {
      let d = VD.variants(k)
      if (d) d.forEach(addVariant)
    }
    console.log(i+" entries in ", verses.size+" verses")
    tablo1.innerHTML 
    = `<tr><th>No<th>Ayet<th>Standart<th>Kıraat<th>Varyant<tr>`
      + a.join('\n<tr>')
    if (callLater) callLater()
}
let verses = new Set()
let VD  = new VariantData('/Kuran/data/variants.txt', makeTable)
