/* sourceCode:start */
import React from 'react'
import { Checkbox, CheckboxGroup } from 'react-impression'

class Column extends React.Component {
  state = {
    value: [2, 3],
  }

  onChange = value => {
    console.log('checkbox value is', value)
    this.setState({
      value: value,
    })
  }

  render() {
    return (
      <CheckboxGroup
        onChange={this.onChange}
        value={this.state.value}
        isColumn
      >
        <Checkbox value={1}>第一个</Checkbox>
        <Checkbox value={2}>第二个</Checkbox>
        <Checkbox value={3}>第三个</Checkbox>
        <Checkbox value={4}>第四个</Checkbox>
      </CheckboxGroup>
    )
  }
}
/* sourceCode:end */

Column.title = '垂直方向的CheckboxGroup'
Column.desc = `> 根据传入isColumn来决定CheckboxGroup是否垂直排列`

export default Column
