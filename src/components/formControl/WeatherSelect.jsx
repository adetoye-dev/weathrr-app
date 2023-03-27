import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const WeatherSelect = ({ weather, handleChange }) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">Weather</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        onChange={handleChange}
        label="Weather"
        name="weather"
        value={weather}
      >
        <MenuItem value="">
          <em>Select Weather</em>
        </MenuItem>
        <MenuItem value="clear sky">Clear Sky</MenuItem>
        <MenuItem value="few clouds">Few Clouds</MenuItem>
        <MenuItem value="scattered clouds">Scattered Clouds</MenuItem>
        <MenuItem value="broken clouds">Broken Clouds</MenuItem>
        <MenuItem value="shower rain">Shower Rain</MenuItem>
        <MenuItem value="rain">Rain</MenuItem>
        <MenuItem value="thunderstorm">Thunderstorm</MenuItem>
        <MenuItem value="snow">Snow</MenuItem>
        <MenuItem value="mist">Mist</MenuItem>
      </Select>
    </FormControl>
  );
};

export default WeatherSelect;
