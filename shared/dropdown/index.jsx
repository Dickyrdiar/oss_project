/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Select } from '@chakra-ui/react';

function Dropdown({ data }) {
  console.log(data);
  return (
    <>
      {data && data?.map((val) => {
        <Select placeholder="filter">
          <option key={val.id} value={val.value}>{val.label}</option>
        </Select>;
      })}
    </>
  );
}

export default Dropdown;
