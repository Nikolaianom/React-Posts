import React from 'react'
import MyInput from './Ui/Input/MyInput'
import Myselect from './Ui/select/Myselect'

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
        <MyInput 
        value={filter.query}
        onChange={e => setFilter({...filter, query :e.target.value})}
        placehodler='Поиск...'
        />
        <Myselect 
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue='Сортировка по'
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'}
        ]}
        />
      </div>
  )
}

export default PostFilter