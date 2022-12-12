var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", "Bearer 1|tOYF8W0hvsx6aDsef0rfgPrmWWnmkvKVlI9huXOy");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify([
  {
    "customerId": "1",
    "amount": "33432",
    "status": "B",
    "billedDate": "2022-10-25 10:23:21",
    "paidDate": null
  },
  {
    "customerId": "1",
    "amount": "33432",
    "status": "B",
    "billedDate": "2022-10-25 10:23:21",
    "paidDate": null
  }
]);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://127.0.0.1:8000/api/v1/invoices/bulk", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));