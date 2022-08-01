function debule(delay,fn) {
  let timer = null;
  return function(...args){
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this,...args);
    }, delay);
  }
}

export default debule