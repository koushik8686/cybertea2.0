import React from "react";
import qr from "../../src/assets/qr2.jpeg"; // Adjust the path if needed
import "./Registration2.css"; // Use a separate CSS file for CyberTEA 2.0

function Registration2() {
  return (
    <>
      <div className="Registration_container" id="registration">
        <div className="reg_heading_container">
          <p className="reg_heading">Registration</p>
        </div>
        <div className="reg_payment">
          <p className="payment_heading">Payment Procedure</p>
        </div>
        <div className="reg_list">
          <ul>
            <li>
              Pay the registration fee using the below payment methods and amount as per your participation type.
            </li>
            <li>
              After payment please fill out the form to confirm your registration {"->"}{" "}
              <a href="https://forms.gle/yPqFsNJGwFACvSYFA" target="_blank" rel="noreferrer">
                Link to the form.
              </a>
            </li>
          </ul>
        </div>
        <div className="reg_fee">
          <p className="fee_heading">Registration Fee</p>
        </div>
        <div className="fee_container">
          <div className="grid-container">
            <div className="grid-heading">Participant Type</div>
            <div className="grid-heading early-registration" >Early Registration</div>
            <div className="grid-heading regular-registration" >Regular Registration</div>

            {/* Subheadings for Early and Regular Registration */}
            <div className="grid-item"></div>
            <div className="grid-subheading">Indian</div>
            <div className="grid-subheading">Foreign</div>
            <div className="grid-subheading">Indian</div>
            <div className="grid-subheading">Foreign</div>

            {/* Table Data */}
            <div className="grid-item">BTech with Research/ MS/MTech/PhD/ Equivalent</div>
            <div className="grid-item">Rs. 900/-</div>
            <div className="grid-item">$50</div>
            <div className="grid-item">Rs. 1400/-</div>
            <div className="grid-item">$80</div>

            <div className="grid-item">Faculty</div>
            <div className="grid-item">Rs. 1400/-</div>
            <div className="grid-item">$70</div>
            <div className="grid-item">Rs. 1900/-</div>
            <div className="grid-item">$100</div>

            <div className="grid-item">Industry Person</div>
            <div className="grid-item">Rs. 1900/-</div>
            <div className="grid-item">$100</div>
            <div className="grid-item">Rs. 2900/-</div>
            <div className="grid-item">$130</div>
          </div>
        </div>
        <div className="payment_container">
          <div className="QR_Fee">
            <p className="QR_heading">Fee Payment through UPI</p>
            <div className="QR_img">
              <a href="#">
                <img src={qr} alt="No image available" />
              </a>
            </div>
          </div>
          <div className="QR_Fee">
            <p className="QR_heading">Fee Payment through Bank Transfer</p>
            <div className="payment_info_con">
              <p className="line_height_2">Account Name: Indian Institute of Information Technology Sri City Chittoor
</p>
              <p className="line_height_2">Bank Account Number : 110167506587
</p>
              <p className="line_height_2">IFSC CODE: CNRB0013247
</p>
              <p className="line_height_2">Bank Name: Canara Bank
</p>
              <p className="line_height_2">Branch Name:Sri City</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration2;
