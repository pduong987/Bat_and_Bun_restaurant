import { Link } from 'react-router-dom';
import { Paper, Avatar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  height: 150,
  lineHeight: '150px',
}));

const IconLink = ({ linkName, linkUrl, linkIcon }) => {
  return (
    <Item elevation={1} className="link-icon" component={Link} to={linkUrl}>
      <Avatar alt={linkName} src={linkIcon} variant="square" sx={{ width: 64, height: 64 }} />
      <Typography variant="h6">{linkName}</Typography>
    </Item>
  )
}

export default IconLink;
