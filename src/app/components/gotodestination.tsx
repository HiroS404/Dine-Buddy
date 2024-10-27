'use client';
import Link from 'next/link';
import React from 'react'

const BtnGoDestination = () => {
  return (
    <div>
        <Link href="/users/destinations">select Destination Click
        <button onClick={() => console.log('clicked')}> 
        </button>
        </Link>
        
    </div>
  )
}

export default BtnGoDestination