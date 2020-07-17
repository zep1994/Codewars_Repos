function incrementString (str) {
  let word_arr = []
  let arr = []
  let str_split = str.split('')


  for (let i of str_split) {
    if (typeof(str_split[i]) !== "string") {
      word_arr.push(i)
    } else {
      arr.push(parseInt(i))
    }
  }

  let new_num = arr.join('')
  if (new_num) {
    let num = word_arr.push(new_num++).toString()
  }



  // for (let j = 0; j < arr.length-1;j++) {
  //   if (arr[j]) {
  //     let new_j = parseInt(arr.pop(j))
  //     new_j++
  //     arr.push(new_j.toString())
  //     break
  //   } else {
  //     console.log("null")
  //   }
  // }

  if (arr.length === 0) {
    arr.push('1')
  }

  //let new_word = word_arr.join('') + arr.join('')
  //console.log(new_word)
  console.log("word", word_arr)
  console.log("number", arr)
}

incrementString("foobar000")
incrementString("foo")
incrementString("foobar01")