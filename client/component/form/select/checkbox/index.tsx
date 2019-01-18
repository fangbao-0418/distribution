import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  style?: React.CSSProperties
  className?: string
  itemStyle?: React.CSSProperties
  itemClassName?: string
  checked?: boolean
  onClick?: () => void
}
class Main extends React.Component<Props> {
  cx = cx
}
export default Main

