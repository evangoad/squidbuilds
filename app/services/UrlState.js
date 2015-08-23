function get() {
  if (window.location.hash === '') {
    return [];
  } else {
    return optimisticParse(window.location.hash);
  }
}

function optimisticParse(hash) {
  let nums = hash.slice(1);
  return nums.split('.').map(num => parseInt(num));
}

function write(array) {
  let chars = `#${array.join('.')}`;
  let currentState = window.history.state;

  window.history.replaceState(currentState, document.title, chars);

  return chars;
}

export { get, write };
