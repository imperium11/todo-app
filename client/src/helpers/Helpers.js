export const formatDate = (d) => {
  let date = new Date(d.slice(0, 10));
  if (!isNaN(date.getTime())) {
      let day = date.getDate().toString();
      let month = (date.getMonth() + 1).toString();

      return (month[1] ? month : '0' + month[0]) + '/' +
         (day[1] ? day : '0' + day[0]) + '/' + 
         date.getFullYear();
  }
}

