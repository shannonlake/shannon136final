let ans = 0;
fetch("WEEK6_JSON.json")
    .then(response => response.json())
    .then(estRec => {
      let div = `<div></div>`;

       estRec.forEach(house => {
            image = house.image;
            ans = house.assessments.land_value + house.assessments.building_value;
            date = house.deed_date.substr(0,10);
            name = house.owner_name.first + " " + house.owner_name.last;
            address = house.owner_address.street + "<br>" + house.owner_address.city + ", " + house.owner_address.state + ", " + house.owner_address.zip;
            avg = (house.quarter_payments[0] + house.quarter_payments[1] + house.quarter_payments[2] + house.quarter_payments[3])/4;
            div += `<div class="col houseblock">
                <div class="housepic"><img src="${image}" height="300" width="300"></div>
                <p><strong>Parcel ID:</strong> ${house.parcel}</p>
                <p><strong>Last Sell Date ID:</strong> ${date}</p>
                <p><strong>Owner Name:</strong> ${name}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Mort. Est:</strong> ${avg}</p>
                <p><strong>Beds:</strong> ${house.beds}</p>
                <p><strong>Baths:</strong> ${house.baths}</p>
                <p><strong>Est. Value:</strong> ${ans}</p>
                <button class="listingbtn" type="button">View Listing</button>
            </div>`;
        });
    document.getElementById("realest").innerHTML = div;
});
