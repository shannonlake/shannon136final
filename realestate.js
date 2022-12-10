let ans = 0;
fetch("WEEK6_JSON.json")
    .then(response => response.json())
    .then(estRec => {
        let li = `<tr><th>Image</th>
                      <th>Parcel</th>
                      <th>Last Sell Date</th>
                      <th>Owner Name</th>
                      <th>Address</th>
                      <th>Qtly Pay Avg</th>
                      <th>Paid YTD</th>
                      <th>Tax Rate/1000</th>
                      <th>Total Values</th></tr>`;

       estRec.forEach(house => {
            image = house.image;
            ans = house.assessments.land_value + house.assessments.building_value;
            date = house.deed_date.substr(0,10);
            name = house.owner_name.first + " " + house.owner_name.last;
            address = house.owner_address.street + "<br>" + house.owner_address.city + "<br>" + house.owner_address.state + ", " + house.owner_address.zip;
            avg = (house.quarter_payments[0] + house.quarter_payments[1] + house.quarter_payments[2] + house.quarter_payments[3])/4;
            li += `<tr>
                <td>${image} </td>
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
