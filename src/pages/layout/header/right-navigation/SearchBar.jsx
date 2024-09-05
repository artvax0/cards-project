import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material'
import React, { memo, useCallback } from 'react'
import { useTheme } from '../../../../providers/CustomThemeProvider'
import { useSearchParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from '../../../../utils/debounce';

export default memo(function SearchBar() {
  const { isDark } = useTheme();
  const [searchParams, setSearch] = useSearchParams();
  const handleChange = useCallback(debounce(({ target }) => setSearch({ q: target.value }), 250), [setSearch]);

  return (
    <Box>
      <FormControl>
        <OutlinedInput
          size='small'
          placeholder='Search'
          defaultValue={searchParams.get('q') ?? ''}
          onChange={handleChange}
          startAdornment={
            <InputAdornment
              position='start'><SearchIcon
                aria-label='search' />
            </InputAdornment>}
          sx={{ backgroundColor: isDark ? '#222831' : '#EEEEEE' }} />
      </FormControl>
    </Box>
  )
})
