let value = 0;
fetch("houses.json")
    .then(response => response.json())
    .then(estRec => {
      var div = "";
      var listinginfo = "";
       estRec.forEach(house => {
            ct = 0;
            image = house.image;
            value = house.assessments.land_value + house.assessments.building_value;
            ans = value.toLocaleString("en-US");
            date = house.deed_date.substr(0,10);
            name = house.owner_name.first + " " + house.owner_name.last;
            address = house.owner_address.street + "<br>" + house.owner_address.city + ", " + house.owner_address.state + ", " + house.owner_address.zip;
            avg = (house.quarter_payments[0] + house.quarter_payments[1] + house.quarter_payments[2] + house.quarter_payments[3])/4;
            div += `
                <div class="col">
                <div class="col p-3 houseblock">
                <div class="housepic"><img src="${image}"></div>
                <p><strong>Parcel ID:</strong> ${house.parcel}</br>
                <strong>Last Sold:</strong> ${date}</br>
                <strong>Owner Name:</strong> ${name}</br>
                ${address}</br>
                <strong>Mort. Est:</strong> ${avg}</br>
                ${house.beds} Beds | ${house.baths} Baths</br>
                <strong>Est. Value: $</strong>${ans}</p>
                <button class="btn btn-primary listingbtn" type="button" onclick="on(this)">View Listing</button>
            </div>
            </div>`;

            listinginfo = `
            <div id="listing-info">
            <div><img src="${image}"></div>
            <strong>Owner Name:</strong> ${name}</br>
            </div>
            `
        });
    document.getElementById("realest").innerHTML = div;
    document.getElementById("overlay").innerHTML = listinginfo;
});
