import Loadable from 'react-loadable'
import React from 'react'


const LoadableComponent = Loadable(
    {
        loader:()=>import('./'),
        loading(){
            //在加载的时候会出现这个画面，
            return <div>正在加载</div>
        }
    }
)

export default () => <LoadableComponent />