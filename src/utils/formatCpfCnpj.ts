
const formatCpfCnpj = (value: string):string => {
    let document;
    document = value?.replace(/\D/g, '');
    if (document?.length === 11) {
      document = document.replace(/(\d{3})(\d)/, '$1.$2');
      document = document.replace(/(\d{3})(\d)/, '$1.$2');
      document = document.replace(/(\d{3})(\d{2})$/, '$1-$2');
      return document;
    }
    if (document?.length === 14) {
      document = document.replace(/(\d{2})(\d)/, '$1.$2');
      document = document.replace(/(\d{3})(\d)/, '$1.$2');
      document = document.replace(/(\d{3})(\d)/, '$1/$2');
      document = document.replace(/(\d{4})(\d{2})$/, '$1-$2');
      return document;
    }
    return value;
}
  
export default formatCpfCnpj;