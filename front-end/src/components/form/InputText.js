import React from 'react';
import styled from "styled-components";
import { TextField } from '@material-ui/core';

const Input = styled(TextField)`
  display: flex;
  flex: 1;
  background-color: ${props => props.theme.color.inputBg};
  border-radius: 5px;
  margin: 30px 0 10px;
`;
const Error = styled.span`
  color: orange;
`;

class InputText extends React.Component {
  render() {
    const {
      input,
      label,
      type,
      meta: { touched, error },
      ...custom
    } = this.props;
    return (
      <div>
        <Input
          label={label}
          type={type || 'text'}
          {...input}
          {...custom}
          margin="normal"
          variant="filled"
        />
        {touched && error && (
          <Error>{ error }</Error>
        )}
      </div>
    );
  }
}

export default InputText;