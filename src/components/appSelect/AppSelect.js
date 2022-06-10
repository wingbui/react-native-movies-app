import React, { useState } from 'react'
import { Center, Box, Select, CheckIcon } from 'native-base'

export const AppSelect = ({ option, setOption, options = [] }) => {

  return (
      <Box w='3/4' maxW='200'>
        <Select
          selectedValue={option}
          minWidth='200'
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size='5' />,
          }}
          mt={1}
          onValueChange={(itemValue) => setOption(itemValue)}
        >
          {options.map((o) => {
            return <Select.Item label={o} key={o} value={o} />
          })}
        </Select>
      </Box>
  )
}
