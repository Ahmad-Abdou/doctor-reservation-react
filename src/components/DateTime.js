import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import React from "react";
import "../App.css";

function DateTime() {
  const minDate: Date = new Date("08/09/2021 09:30 AM");
  const maxDate: Date = new Date("08/09/2021 04:30 PM");

  return (
    <div>
      <DateTimePickerComponent
        id="datetimepicker"
        min={minDate}
        max={maxDate}
      />
    </div>
  );
}

export default DateTime;
