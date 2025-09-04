import React from "react";
import styles from "./FormInput.module.css";

const FormInput = ({ label, value, onChange, type = "text", placeholder }) => {
  return (
    <div className={styles.inputGroup}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
