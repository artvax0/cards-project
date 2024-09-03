import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material'
import React, { memo } from 'react'
import { useTheme } from '../../../../providers/CustomThemeProvider'
import { useSearchParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

export default memo(function SearchBar() {
  const { isDark } = useTheme();
  const [searchParams, setSearch] = useSearchParams();
  const handleChange = ({ target }) => setSearch({ q: target.value });

  return (
    <Box>
      <FormControl>
        <OutlinedInput size='small' placeholder='Search' value={searchParams.get('q') ?? ''} onChange={handleChange} startAdornment={<InputAdornment position='start'><SearchIcon aria-label='search' /></InputAdornment>} sx={{ backgroundColor: isDark ? '#222831' : '#EEEEEE' }} />
      </FormControl>
    </Box>
  )
})
