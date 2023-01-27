import React from 'react';
import loadingSVG from '../assets/images/loading.svg';
export default function Loading({ loading }) {
  return loading ? (
    <div className="loading">
      <img src={loadingSVG} alt="loading" />
    </div>
  ) : (
    <></>
  );
}
