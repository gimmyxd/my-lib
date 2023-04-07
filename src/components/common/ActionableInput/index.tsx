import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { theme } from '../../../theme'
import Input from '../Input'
import { InputProps } from '../Input'
import Label from '../Label'

const CenteredRow = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

const ActionableInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`
const StyledInput = styled(Input)`
  &:disabled {
    -webkit-text-fill-color: ${theme.lochivarAccent4};
  }
  cursor: pointer;
`
export type ActionableInputProps = InputProps & {
  testId?: string
  linkValue?: string
}

export const ActionableInput: React.FC<ActionableInputProps> = ({
  testId,
  label,
  type,
  linkValue,
  ...inputProps
}) => {
  return (
    <ActionableInputContainer>
      <Label>
        {label}
        <CenteredRow>
          {!!linkValue ? (
            <Link to={linkValue!}>
              <StyledInput {...inputProps} data-testid={testId} type={type} />
            </Link>
          ) : (
            <Input {...inputProps} data-testid={testId} type={type} />
          )}
        </CenteredRow>
      </Label>
    </ActionableInputContainer>
  )
}
