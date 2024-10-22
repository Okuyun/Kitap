"use strict";
function makeTable() {
  function addVariant(x) {
      if (filter(x)) return
      let {cv, num, rdr, word, rgn, rasm, std} = x
      let [c, v] = cv.split(':')
      let color = (rgn == '*')? 'class=yellow' : ''
      if (rdr.length > 7) rdr = rdr.replaceAll(' ','')
      let url = 
"https://corpuscoranicum.de/en/verse-navigator/sura/"+c+"/verse/"+v+"/variants"
      a.push(`<td>${++i}
        <td><a target=iqra href="/Kuran/reader.html#v=${cv}">${cv}</a>
        <td ${color}>${std}<td>${rdr}
        <td><a target=Kuran href="${url}">${word}</a>\n`)
  }
    let a = [], i = 0
    let kk = Object.getOwnPropertyNames(VD._data)
    kk.pop() // remove length (last key in kk)
    for (let k of kk) {
      let d = VD.variants(k)
      if (d) d.forEach(addVariant)
    }
    console.log(i+" entries in the table")
    tablo1.innerHTML 
    = `<tr><th>No<th>Ayet<th>Standart<th>Kıraat<th>Varyant<tr>`
      + a.join('\n<tr>')
}
let VD  = new VariantData('/Kuran/data/variants.txt', makeTable)
