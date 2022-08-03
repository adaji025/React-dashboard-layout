import React from 'react'
import TabsInner from './TabsInner'
import TabsNav from './TabsNav'

const Tabs = () => {
  return (
    <div className='tabs'>
        <h1>Tabs Demo page</h1>
        {/** *Tabs Nav */ }
        <TabsNav />
        {/** *Tabs Inner Content*/ }
        <TabsInner />
    </div>
  )
}

export default Tabs