import {useState, useContext, createContext} from 'react';

const FormContent = createContext();
export const useFormContent = () => useContext(FormContent) 
export const FormProvider = ({children}) => {
    const [formData, setFormData] = useState({})
    return (
        <FormContent.Provider value={{formData, setFormData}} >
            {children}
        </FormContent.Provider>  
    )
}