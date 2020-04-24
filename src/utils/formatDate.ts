import { format, parseISO } from 'date-fns';

const formatDate = (value: Date): string => {
  return format(parseISO(String(value)), 'dd/MM/yyyy');
};

export default formatDate;
