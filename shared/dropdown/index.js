import React from "react";
import { Select } from "@chakra-ui/react";

const Dropdown = ({data}) => {

  console.log(data)    
  return (
    <>
      {data && data?.map((val) => {
        <Select placeholder='filter'>
          <option key={val.id} value={val.value}>{val.label}</option>
        </Select>
      })}
    </>
  )
}

export default Dropdown