import { all, put, takeEvery, takeLatest, delay } from 'redux-saga/effects'

// const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  console.log('Hello Sagas!')
}

function* incrementAsync() {
  // yield delay(1000)
  yield delay(2000);
  console.log('go here');
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  yield takeLatest('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}