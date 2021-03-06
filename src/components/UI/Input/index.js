import React from "react";
import { Form } from "react-bootstrap";

const Input = ({ label, type, placeholder, errorMessage, value, onChange }) => {
  return (
    <Form.Group controlId="">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Form.Text className="text-muted">{errorMessage}</Form.Text>
    </Form.Group>
  );
};

export default Input;
