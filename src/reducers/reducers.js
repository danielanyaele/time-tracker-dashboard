
const switchLog = (timeFrame, state) => {
  let newState = state.map(item => {
    const { timeframes } = item;
    return {
      ...item,
      currentTime:timeframes[timeFrame].current,
      previousTime:timeframes[timeFrame].previous
    }
  })

  return newState;
}

const timeTrackingReducer = (state, action) => {
  if (action.type) {
    let newState = switchLog(action.payload, state);
    return newState;
  }
}


export { switchLog, timeTrackingReducer };



