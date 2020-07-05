import React from 'react';

import BlackCard from './BlackCard';
import EmptyCard from './EmptyCard';

export default function Gameboard() {
  return (
    <div style={{width:'100%'}}>
      <hr/>
      <BlackCard/>
      <EmptyCard/>
      <EmptyCard/>
      Gameboard
    </div>
  )
}
