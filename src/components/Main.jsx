import React from 'react'
import Sample from './sample'

const Main = (props) => {
  const { url } = props.match;
  console.log('Add Settlement Path',props.match);
  if (url === '/' || url === '/sample' || url === '/Sample') {
    return <Sample />;
  }
  return <span />;
}

export default Main;
