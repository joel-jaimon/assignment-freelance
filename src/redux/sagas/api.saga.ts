import { takeLatest, call, put } from "@redux-saga/core/effects";
import { getImages, updateImages } from "../reducers/general";

const getData = async (pageIndex: number) => {
  try {
    console.log(pageIndex);
    const res = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}?page=${pageIndex}&limit=30`
    );
    const data = await res.json();
    return data;
  } catch (e: any) {
    return null;
  }
};

export function* getImagesSaga() {
  yield takeLatest(getImages.type, function* (action) {
    //@ts-ignore
    const data = yield call(getData, action.payload);
    if (data) {
      yield put(updateImages(data));
    } else {
    }
  });
}
