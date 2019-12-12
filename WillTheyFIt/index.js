function enough(cap, on, wait) {
  let possible = cap - on 
  console.log(possible)
  if (possible === wait) {
      return 0
  } else if (possible < wait) {
      let cant = possible - wait 
      return cant
  } else {
      console.log("Oops")
  }
}

enough(10, 5, 5)
enough(100, 60, 50)