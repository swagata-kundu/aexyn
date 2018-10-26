let autocomplete;
const componentForm = {
  street_number: 'long_name',
  route: 'long_name',
  locality: 'long_name',
  sublocality_level_1: 'long_name',
  sublocality_level_2: 'long_name',
  administrative_area_level_1: 'long_name',
  country: 'long_name',
  postal_code: 'short_name',
};

/* eslint-disable */

export const initAutocomplete = (onAddressSelect) => {
    autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('company_address')), {
            types: ['geocode'],
        },
    );
    autocomplete.addListener('place_changed', () => {
        fillInAddress(onAddressSelect);
    });
}

function fillInAddress(onAddressSelect) {
    // Get the place details from the autocomplete object.
    const place = autocomplete.getPlace();
    const {
        address_components
    } = place;
    let formatted_address = {};
    address_components.forEach(a => {
        const addressType = a.types[0];
        if (componentForm[addressType]) {
            formatted_address[addressType] = a.long_name
        }
    });
    let reformat_address = {};
    if (formatted_address.locality) {
        reformat_address.city = formatted_address.locality;
    }
    if (formatted_address.postal_code) {
        reformat_address.zip = formatted_address.postal_code
    }
    if(formatted_address.route || formatted_address.street_number){
        reformat_address.address1=`${formatted_address.street_number?formatted_address.street_number:''} ${formatted_address.route?formatted_address.route:''}`
    }

    if(formatted_address.sublocality_level_2 || formatted_address.sublocality_level_1){
        reformat_address.address2=`${formatted_address.sublocality_level_2?formatted_address.sublocality_level_2:''} ${formatted_address.sublocality_level_1?formatted_address.sublocality_level_1:''}`
    }

    return onAddressSelect(reformat_address);
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
export const geolocate = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            let circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy,
            });
            autocomplete.setBounds(circle.getBounds());
        });
    }
}