import useLocalStorage from './useLocalStorage';

const useForm = (initialValues)=> {
    const [values, setValues] = useLocalStorage("form", initialValues);
  
    const handleChanges = e => {
      e.persist();
      setValues({
        ...values,
        [e.target.name]:e.target.value
      });
    };
  
    const clearForm = e => {
      e.preventDefault();
      setValues(initialValues);
    };
  
    return([values, handleChanges, clearForm]);
  }

  export default useForm;