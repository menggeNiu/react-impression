import React from 'react'
import Card from '@/site/components/Card'
import Basic from './Basic'
import Inline from './Inline'
import Slack from './Slack'
import Tab from './Tab'
import Pill from './Pill'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const NavAttrParams = [
  ['type', '导航栏样式，可选值为 line、tab、pill、inline', 'string', 'line'],
  ['stacked', '是否纵向排列', 'boolen', 'false'],
  ['defaultActiveKey', '设置默认激活标签', 'number', '-'],
  ['onSelect', '选中回调函数', 'function', '-'],
]

const NavItemAttrParams = [
  ['disabled', '设置是否可以选中', 'boolen', 'false'],
  ['active', '设置默认激活标签', 'boolean', 'false'],
  ['eventKey', '设置事件关键字', 'any', '-'],
  ['onClick', '设置点击回调函数', 'function', '-'],
  ['className', '自定义样式', 'string', '-'],
]

const NavAttrTable = transfer(NavAttrParams)
const NavItemAttrTable = transfer(NavItemAttrParams)

export default () => {
  return (
    <Wrapper title='Nav标签切换' desc='导航栏切换组件'>
      <Card component={Basic} />
      <Card component={Inline} />
      <Card component={Slack} />
      <Card component={Tab} />
      <Card component={Pill} />
      <MarkdownPreview markdown={NavAttrTable} name='Nav API' />
      <MarkdownPreview markdown={NavItemAttrTable} name='NavItem API' />
    </Wrapper>
  )
}
