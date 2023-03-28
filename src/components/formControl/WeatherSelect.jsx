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
        <MenuItem className="weather-select-menu-item" value="">
          <em>Select Weather</em>
        </MenuItem>
        <MenuItem className="weather-select-menu-item" value="clear sky">
          <img src="/icons/clear sky.svg" />
          <span>Clear Sky</span>
        </MenuItem>
        <MenuItem className="weather-select-menu-item" value="few clouds">
          <img src="/icons/few clouds.svg" />
          <span>Few Clouds</span>
        </MenuItem>
        <MenuItem className="weather-select-menu-item" value="scattered clouds">
          <img src="/icons/scattered clouds.svg" />
          <span>Scattered Clouds</span>
        </MenuItem>
        <MenuItem className="weather-select-menu-item" value="broken clouds">
          <img src="/icons/broken clouds.svg" />
          <span>Broken Clouds</span>
        </MenuItem>
        <MenuItem className="weather-select-menu-item" value="shower rain">
          <img src="/icons/shower rain.svg" />
          <span>Shower Rain</span>
        </MenuItem>
        <MenuItem className="weather-select-menu-item" value="rain">
          <img src="/icons/rain.svg" />
          <span>Rain</span>
        </MenuItem>
        <MenuItem className="weather-select-menu-item" value="thunderstorm">
          <img src="/icons/thunderstorm.svg" />
          <span>Thunderstorm</span>
        </MenuItem>
        <MenuItem className="weather-select-menu-item" value="snow">
          <img src="/icons/snow.svg" />
          <span>Snow</span>
        </MenuItem>
        <MenuItem className="weather-select-menu-item" value="mist">
          <img src="/icons/mist.svg" />
          <span>Mist</span>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default WeatherSelect;
