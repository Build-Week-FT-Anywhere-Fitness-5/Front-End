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
  
    return([values, handleChanges]);
  }

  export default useForm;