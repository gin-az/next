import React, { FC } from "react";
import Heading from "./Heading";
import s from "../styles/Card.module.scss";
import { IContact } from "../types";

const ContactInfo = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};
  return (
    <>
      <Heading tag="h3" text={name} />
      <div className={s.card}>
        <div>
          <strong>Email:</strong>
          {email}
        </div>
        <div>
          <strong>Address: </strong>
          {`${street}, ${suite}, ${city}, ${zipcode}`}
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
