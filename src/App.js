import { Button } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<AccessAlarmIcon />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Contained
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
    </div>
  );
}

export default App;
