import styled, { css } from 'styled-components';
import Input from './Input';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { LuCalendar } from 'react-icons/lu';
import { Controller, useController, useFormContext } from 'react-hook-form';
import { format, formatISO } from 'date-fns';
import Warning from '../Warning';

const Form = styled.form`
  display: grid;
  gap: 2.4rem;
  /* grid-auto-flow: row; */
  /* grid-auto-rows: auto; */
  grid-template-columns: 1fr;

  ${props =>
    props.type === 'regular' &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-tab-active);
    `}

  ${props =>
    props.type === 'modal' &&
    css`
      width: 80rem;
    `}
    
  ${props =>
    props.columns &&
    css`
      grid-template-columns: 1fr 1fr;
    `}
  
  overflow: hidden;
  font-size: 1.4rem;
`;

const StyledFormItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 0.8rem;
  align-items: center;
  grid-column: 1;

  ${props =>
    props.side === 'right' &&
    css`
      grid-column: 2;
    `}
`;

const StyledLabel = styled.label`
  font-weight: 500;
`;

const StyledTextArea = styled.textarea`
  resize: none;
`;

const StyledCheckbox = styled.input`
  justify-self: start;
`;

Form.defaultProps = {
  type: 'regular',
  columns: true
};

StyledFormItem.defaultProps = {
  side: 'left'
};

function TextShort({ side, label, id, placeholder, validation }) {
  // const [text, setText] = useState('');
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <StyledFormItem side={side}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <Input
        placeholder={placeholder}
        {...register(id, validation)}
        style={{ height: '4rem', width: '22rem' }}
      />
      {errors[id] && <Warning>{errors[id].message}</Warning>}
    </StyledFormItem>
  );
}

function TextLong({ side, label, id, placeholder, validation }) {
  // const [text, setText] = useState('');
  const { register } = useFormContext();

  return (
    <StyledFormItem side={side}>
      <StyledLabel htmlFor={id} style={{ alignSelf: 'start' }}>
        {label}
      </StyledLabel>
      <StyledTextArea placeholder={placeholder} {...register(id, validation)} />
    </StyledFormItem>
  );
}

function DateSelect({ side, label, id, dispatch, action }) {
  const { control, setValue, setError } = useFormContext();

  return (
    <StyledFormItem side={side}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <Controller
        name={id}
        control={control}
        render={({ field }) => (
          <DatePicker
            showIcon
            icon={<LuCalendar />}
            dateFormat="dd/MM/yyyy"
            calendarClassName="calendar"
            onChange={date => {
              field.onChange(date);
              const isoDate = new Date(date).toISOString();
              dispatch({
                type: action,
                payload: isoDate
              });
              setValue(id, isoDate);
            }}
            selected={field.value}
            id={id}
          />
        )}
        rules={{ required: 'Date required' }}
      />
    </StyledFormItem>
  );
}

function WrappedCheckbox({ props }) {
  return <input type="checkbox" {...props} />;
}

function Checkbox({ side, label, id }) {
  // const [isChecked, setIsChecked] = useState(false);
  const { register } = useFormContext();

  return (
    <StyledFormItem side={side}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledCheckbox type="checkbox" {...register(id)} />
    </StyledFormItem>
  );
}

function HiddenInput({ id, value }) {
  const { register } = useFormContext();

  return <input type="hidden" value={value} {...register(id)} />;
}

Form.TextShort = TextShort;
Form.TextLong = TextLong;
Form.DateSelect = DateSelect;
Form.Checkbox = Checkbox;
Form.HiddenInput = HiddenInput;

export default Form;
