import { useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

const FormContent = createContext();
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [ticketData, setTicketData] = useState({
    ticketType: null,
    ticketCount: null,
  });

  return (
    <FormContent.Provider
      value={{ formData, setFormData, ticketData, setTicketData }}
    >
      {children}
    </FormContent.Provider>
  );
};
export const useFormContent = () => useContext(FormContent);

FormProvider.propTypes = {
  children: PropTypes.any,
};
