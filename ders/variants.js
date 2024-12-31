"use strict";
function makeTable() {
  function addVariant(x) {
    function getColor() {
      if (!rgn) return ''
      switch (rgn) {
        case '*': return 'yellow'
        case 'x': return ''
        default:  return 'pink'
      }
    }
      if (filter(x)) return
      let {cv, num, std, rdr, word, rgn, rasm} = x
      let [c, v] = cv.split(':')
      let color = getColor()
      let cls = color? 'class='+color : ''
      if (rdr.length > 7) rdr = rdr.replaceAll(' ','')
      if (cv == prev.cv && num == prev.num) {
        a.pop() //remove last entry and use it in the next
        rdr  = prev.rdr  +'<br>'+ rdr
        word = prev.word +'<br>'+ word
      } else i++
      let url = 
"https://corpuscoranicum.de/en/verse-navigator/sura/"+c+"/verse/"+v+"/variants"
      a.push(`<td>${i}
        <td><a target=iqra href="/Kuran/reader.html#v=${cv}">${cv}</a>
        <td ${cls}>${std}<td>${rdr}
        <td><a target=Kuran href="${url}">${word}</a>\n`)
      prev = x
  }
    let a = [], i = 0, prev = {cv:'', num:0}
    for (let k of VD._keys) {
      let d = VD.variants(k)
      if (d) d.forEach(addVariant)
    }
    console.log(i+" entries in ", VD._keys.length+" verses")
    tablo1.innerHTML 
    = `<tr><th>No<th>Ayet<th>Standart<th>Kıraat<th>Varyant<tr>`
      + a.join('\n<tr>')
    if (callLater) callLater()
}
let VD  = new VariantData('/Kuran/data/variants.txt', makeTable)
