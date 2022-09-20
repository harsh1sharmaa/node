const getPromise = async () => {
  // do a thing, possibly async, then…

   if (true) {
    return   'Stuff worked!'
  } else {
      throw 'It broke'
  }
}
const promise = getPromise()
console.log(promise)