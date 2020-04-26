import moment from 'moment';

const formatDate = (value: Date): string => {
  return moment(value).format('DD/MM/YYYY');
};

export default formatDate;
