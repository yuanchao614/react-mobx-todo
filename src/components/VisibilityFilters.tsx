import React from 'react'
import cx from 'classnames'
import { TodoStore } from '../store/TodoStore'
import { VISIBILITY_FILTERS } from '../constants'
import { observer } from 'mobx-react-lite'

interface PropsType {
    todoStore: TodoStore
}


const VisibilityFilters = ({ todoStore }: PropsType) => {
    debugger
    return (
       <div className="visibility-filters">
           {
               Object.keys(VISIBILITY_FILTERS).map((item, index) => {
                //    debugger
                   return <span key={index} className={cx('filter-item', { 'active': todoStore.activeFilter === VISIBILITY_FILTERS[item]})} onClick={() => todoStore.setFilter(VISIBILITY_FILTERS[item])}>{VISIBILITY_FILTERS[item]}</span>
               })
           }
       </div>
    )
}



export default observer(VisibilityFilters)