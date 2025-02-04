'use client'

import './page.scss'
import { Button } from '@/shared'
import { useCallback } from 'react'

export default function Home() {
  const onClick = useCallback((value: number) => {
    console.log(value)
  }, [])

  return (
    <div className='home custom-scroll-bar'>
      <Button className='button' onClick={onClick}>
        text
      </Button>
      <div className='nested' />
    </div>
  )
}
