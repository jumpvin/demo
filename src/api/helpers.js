 const updateArray = (id, array, newVal = '') => {
  const updatedArray = array.slice();
  const spliceArgs =  newVal ? [findIndex(id, array), 1, newVal] : [findIndex(id, array), 1];
  updatedArray.splice(...spliceArgs);
  return updatedArray;
}
const getFromArray = (id, array) => {
  const itemIndex = findIndex(id, array);
  return array[itemIndex];
}

const findIndex = (id, array) => {
  return array.findIndex( (item) => {
    return item._id === id;
  });
 };

 const updateClock = (clock) => {
  let [ min, sec ] = clock.split(':');
  sec = sec === '00' ? 59 : sec = Number(sec-1);
  min = sec === 59 ? min !=='00' ? Number(min-1): min : min;
  min = min < 10 && typeof min === 'number' ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;
  return `${min}:${sec}`;
}

const numToMin = (num) => {
  num = num < 10 ? `0${num}` : num;
  return `${num}:00`
}

 export {
   findIndex,
   getFromArray,
   updateArray,
   updateClock,
   numToMin,
 }