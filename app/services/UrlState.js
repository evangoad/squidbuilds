function get() {
  if (window.location.hash === '' || window.location.hash === '#.') {
    return {
      weapon: undefined,
      shoe: undefined
    };
  } else {
    const [weapon, shoe] = optimisticParse(window.location.hash);

    return {weapon, shoe}
  }
}

function optimisticParse(hash) {
  let nums = hash.slice(1);
  return nums.split('.').map(intOrUndefined);
}

function write(array) {
  let chars = `#${array.join('.')}`;
  let currentState = window.history.state;

  window.history.replaceState(currentState, document.title, chars);

  return chars;
}

function intOrUndefined(num) {
  if (num === '') {
    return undefined;
  } else {
    return parseInt(num);
  }
}

export { get, write };
