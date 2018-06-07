import React from 'react'
import Card from '@/site/components/Card'
import Basic from './Basic'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const inlineSelectAttr = [
  ['value', '选中值', 'any', '-'],
  ['defaultValue', '默认选中值', 'any', '-'],
  ['onChange', '选中回调函数', 'function', '-'],
  ['className', '自定义样式', 'string', '-'],
]

const optionAttr = [
  ['active', '是否选择,用的时候不必添加此属性', 'boolean', '-'],
  ['className', '自定义样式', 'string', '-'],
]

const inlineSelectAttrTable = transfer(inlineSelectAttr)
const optionTable = transfer(optionAttr)

export default () => {
  return (
    <Wrapper title='InlineSelect' desc='行内样式选择器，多用于属性分类选择'>
      <Card component={Basic} />
      <MarkdownPreview
        markdown={inlineSelectAttrTable}
        name='InlineSelect API'
      />
      <MarkdownPreview markdown={optionTable} name='InlineSelect.Option API' />
    </Wrapper>
  )
}
