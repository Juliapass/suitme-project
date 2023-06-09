import React from "react";
import "./Measurements.css";

const Measurements = () => {
  return (
    <div className="popup-measurements-container">
      <h3>Enter Your Body Measurements</h3>
      <p>Enter your body measurements below to get started:</p>
      <table>
        <thead>
          <tr>
            <th>Measurement</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Height (cm)</td>
            <td>
              <input type="number" id="height" name="height" required />
            </td>
          </tr>
          <tr>
            <td>Weight (kg)</td>
            <td>
              <input type="number" id="weight" name="weight" required />
            </td>
          </tr>
          <tr>
            <td> Waist(cm)</td>
            <td>
              <input type="number" id="waist" name="waist" required />
            </td>
          </tr>
          <tr>
            <td> Bra Size(cm)</td>
            <td>
              <input type="number" id="bra" name="bra" required />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit" className="popup-button">
        Submit
      </button>
    </div>
  );
};

export default Measurements;
