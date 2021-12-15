import React from 'react';
import { Paper, Button, Avatar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  height: 150,
  lineHeight: '150px',
}));

const IconLink = ({ linkName, linkUrl, linkIcon }) => {
  return (
    <Item
      data-testid="link-icon"
      elevation={0}
      className="link-icon"
      component={Button}
      disableRipple
      size="small"
      target="_blank"
      rel="noreferrer noopener"
      href={linkUrl}
    >
      <Avatar alt={linkName} src={linkIcon} variant="square" sx={{ width: 64, height: 64 }} />
      <Typography data-testid="link-name" variant="h6">{linkName}</Typography>
    </Item>
  )
}

export default IconLink;
