import { Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import { useState } from "react";

//install - yarn add date-fns @date-io/date-fns dan yarn add @mui/lab

function MuiPacker() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  console.log({ selectedDate });
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        // renderInput={(params) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
      />
    </Stack>
  );
}

export default MuiPacker;
