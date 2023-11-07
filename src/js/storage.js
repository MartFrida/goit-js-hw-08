const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return (serializedState === null) ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.log('Get state error: ', err.message)
  }
}

const remove = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.log('Remove item error: ', err.message)
  }
}

export default {
  save,
  load,
  remove,
};