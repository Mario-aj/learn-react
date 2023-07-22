import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const UserProfile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="25px">
      <Box display="flex" justifyContent="center" alignItems="center">
        <img
          alt="profile-user"
          width="100px"
          height="100px"
          src="https://scontent.flad1-1.fna.fbcdn.net/v/t1.6435-9/156909741_2922159921401015_856062972842462937_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHFOhSEf7MwJpJfipMeVI1ldyFMex8uBn53IUx7Hy4GfrSXx2ReizllPwt-KOYbkATkfWlhUk-CKYMBepAZh_yM&_nc_ohc=9QjuYLQG3kkAX_eg-fI&_nc_ht=scontent.flad1-1.fna&oh=00_AfCcyPU1s8XmJ9J0rHPeVcY4UBMtXxfiPKbivjgg0wjZGA&oe=64E2E023"
          style={{ cursor: "pointer", borderRadius: "50%" }}
        />
      </Box>

      <Box textAlign="center">
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{
            mt: "10px 0 0 0",
          }}
        >
          Mário Jorge
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[500]}>
          Admin
        </Typography>
      </Box>
    </Box>
  );
};

export default UserProfile;
