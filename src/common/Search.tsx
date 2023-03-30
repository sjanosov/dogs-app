import React, { useState } from 'react'

interface ISearchProps {
    getQuery: Function;
}

export const Search:React.FC<ISearchProps> = ({getQuery}) => {
   

    const onChange = (q: string) => {
       
        getQuery(q)
      }
  return (
        <div className="search-input">
            <label className="sr-only" htmlFor="SearchBreeds">Search for dog breeds...</label>
            <input id="SearchBreeds" type="search" placeholder='Try to search for a breed...' onChange={(e) => onChange(e.target.value) }/>
        </div>
  )
}


