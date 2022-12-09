let ans = 0;
fetch("WEEK6_JSON.json")
    .then(response => response.json())
    .then(estRec => {
        let li = `<tr><th>Parcel</th>
                      <th>Hello Date</th>
                      <th>Owner Name</th>
                      <th>Address</th>
                      <th>Qtly Pay Avg</th>
                      <th>Paid YTD</th>
                      <th>Tax Rate/1000</th>
                      <th>Total Val</th></tr>`;

       estRec.forEach(house => {
            ans = house.assessments.land_value + house.assessments.building_value;
            date = house.deed_date.substr(0,10);
            name = house.owner_name.first + " " + house.owner_name.last;
            address = house.owner_address.street + "<br>" + house.owner_address.city + "<br>" + house.owner_address.state + ", " + house.owner_address.zip;
            avg = (house.quarter_payments[0] + house.quarter_payments[1] + house.quarter_payments[2] + house.quarter_payments[3])/4;
            li += `<tr>
                <td>${house.parcel} </td>
                <td>${date}</td>
                <td>${name}</td>
                <td>${address}</td>
                <td>${avg}</td>
                <td>${house.paid_YTD}</td>
                <td>${house.tax_rate_perK}</td>
                <td>${ans}</td>
            </tr>`;
        });
    document.getElementById("realest").innerHTML = li;
});


//                   {
//                    "parcel" : 123566,
//                    "deed_date" : "1999-07-08T09:02:23.899Z",
//                    "owner_name" : { "first" : "Mary",
//                                     "last" : "Lamb"
//                                   },
//                    "owner_address" :  {   "street": "11 West Lane",
//                                           "city": "Acushnet",
//                                           "state": "MA",
//                                           "zip": 34556
//                                       },
//                    "assessments" :
//                                   {   "land_value": 990000,
//                                       "building_value": 1000456
//                                   },
//                   "quarter_payments": [1000, 9999, 8888, 9998],
//                   "paid_YTD": 120000,
//                   "tax_rate_perK": 98
//
//                 }
//
//           ]
