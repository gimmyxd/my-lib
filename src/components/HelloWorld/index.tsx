import React, { useState } from 'react'
import Button from '../common/Button'
import { ActionableInput } from '../common/ActionableInput'
import copy from 'copy-to-clipboard'


const HelloWorld = () => {
  const [name, setName] = useState('')
  return <>
  <ActionableInput label="test 7" onChange={(v) => setName(v.target.value)}  onClickCopy={copy}></ActionableInput>
  <Button>{name}</Button>
  </>
}

export default HelloWorld
