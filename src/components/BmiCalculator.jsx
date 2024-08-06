import { Slider } from "antd";
import React, { useMemo, useState } from "react";

function BmiCalculator() {
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(130);

  const bmi = useMemo(() => {
    if (height > 0) {
      let heightInMeter = height / 100;
      let heightSquare = heightInMeter * heightInMeter;
      return weight / heightSquare;
    } else {
      return 0;
    }
  }, [weight, height]);

  const healthStatus = useMemo(() => {
    if (bmi < 16.0) {
      return "Severely Underweight";
    } else if (bmi >= 16.0 && bmi < 18.4) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else if (bmi >= 30.0 && bmi < 34.9) {
      return "Moderately Obesity";
    } else {
      return "Severely Obesity";
    }
  }, [bmi]);

  const healthStatusClass = useMemo(() => {
    if (bmi < 18.5) {
      return "text-blue-500";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "text-green-500";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "text-orange-500";
    } else {
      return "text-red-500";
    }
  }, [bmi]);

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

        <p className=" font-semibold pt-5">Height : {height} cm</p>
        <Slider
          className="py-4"
          min={1}
          max={350}
          step={1}
          value={height}
          tooltip={{ open: true, formatter: (value) => `${value} cm` }}
          onChange={(value) => {
            setHeight(value);
          }}
        />

        <div className="text-center pt-7">
          <button className=" font-semibold bg-purple-500 px-8 py-3 rounded-3xl mt-2 text-white">
            BMI is : {bmi.toFixed(2)}
          </button>
        </div>
        <div className="text-center pt-5">
          <p className="font-semibold">
            <span className={`${healthStatusClass}`}>{healthStatus}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BmiCalculator;
