import React from "react";

interface Props {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  id: string;
}

const CheckBox: React.FC<Props> = ({ name, onChange, checked, id }) => {
  return (
    <input
      className='remove-checkbox'
      type='checkbox'
      name={name}
      id={id}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default CheckBox;
