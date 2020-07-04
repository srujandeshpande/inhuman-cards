import React from 'react';

import BlackCard from './BlackCard';
import EmptyCard from './EmptyCard';

export default function Gameboard() {
  return (
    <div>
      <BlackCard/>
      <EmptyCard/>
      <EmptyCard/>
      Gameboard
    </div>
  )
}
