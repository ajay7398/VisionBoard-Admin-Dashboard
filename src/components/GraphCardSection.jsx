import React from 'react'
import graphCards from '../data/graphCards'
import GraphCard from './GraphCard';
function GraphCardSection() {
  return (
   <div className=" flex flex-col lg:flex-row gap-6">
      {graphCards.map((card) => (
        <GraphCard key={card.id} item={card} />
      ))}
    </div>
  )
}

export default GraphCardSection;
