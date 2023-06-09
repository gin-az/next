import React from "react";
import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import { GetServerSideProps } from "next";

export const getServerSideProps: (
  context
) => Promise<{ notFound: boolean } | { props: { contact: any } }> = async (
  context
) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  if (!data) {
    return { notFound: true };
  } //  в случае ошибки вернется странится 404
  return { props: { contact: data } };
};

const Contact = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
