
const formatCep = (value: string):string => {
    let cep = value?.replace(/\D/g, '');
    cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');
    return cep;
}
  
export default formatCep;
  