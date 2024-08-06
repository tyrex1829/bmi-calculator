import { Slider } from "antd";
import React, { useMemo, useState } from "react";

function BmiCalculator() {
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(130);
  //   const [bmi, setBmi] = useState(0);

  const bmi = useMemo(() => {
    if (height > 0) {
      let heightInMeter = height / 100;
      let heightSquare = heightInMeter * heightInMeter;
      return weight / heightSquare;
    } else {
      return 0;
    }
  }, [weight, height]);

  return (
    <div className=" shadow-xl mt-8 mx-32 rounded-lg">
      <div className=" bg-purple-700 py-8 text-center text-white rounded-xl">
        <h1 className=" text-3xl font-bold">BMI Calculator</h1>
      </div>

      <div className="py-9 px-16">
        <p className=" font-semibold">Weight : {weight} kg</p>
        <Slider
          className="py-4"
          min={0}
          max={200}
          step={1}
          value={weight}
          tooltip={{ open: true, formatter: (value) => `${value} kg` }}
          onChange={(value) => {
            setWeight(value);
          }}
        />
      </div>
    </div>
  );
}

export default BmiCalculator;
