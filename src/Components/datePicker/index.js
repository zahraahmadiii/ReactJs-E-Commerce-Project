import React, { useState } from "react"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

export default function PickDate() {
  const [value, setValue] = useState(null)
 if(value){
  const expectDate=`${value.day} / ${value.month.number} / ${value.year}`
  localStorage.setItem("expectDate",expectDate)
 }

    return (
        <div  style={{direction:"rtl"}}     
        >
          <DatePicker
            onChange={setValue}
           style={{
            width: "100%",
            borderRadius: "5px",
            border:"none" ,
            height: "28px"
          }}
          containerStyle={{
            width: "98%"
          }}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
          />
        </div>
      )
 
}