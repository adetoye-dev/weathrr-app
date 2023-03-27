import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import data from "../../../data.json";

const CountrySelect = ({ country, handleChange }) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        onChange={handleChange}
        value={country}
        name="country"
        label="Country"
      >
        <MenuItem value="">
          <em>Select Country</em>
        </MenuItem>
        {data.map((item, index) => (
          <MenuItem key={index} value={item.countryCode}>
            {item.countryName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CountrySelect;
