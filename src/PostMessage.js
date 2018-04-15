import * as firebase from 'firebase';
import config from './config/default';
import {addMessage} from './MessageDB';

function postMessage(key, user, userProfile, message,tags, geolocation, streetAddress, start, duration, interval, link, imageUrl, publicImageURL, thumbnailImageURL, thumbnailPublicImageURL, status) {  
  // var mapString = "\nhttps://www.google.com.hk/maps/place/"+ geoString(geolocation.latitude, geolocation.longitude) + "/@" + geolocation.latitude + "," + geolocation.longitude + ",18z/";
  return addMessage(key, message, user, userProfile, tags, geolocation, streetAddress,
    // activites 
    start, duration, interval, link, 
    // images
    imageUrl, publicImageURL, thumbnailImageURL, thumbnailPublicImageURL,
    status).then((messageKey) => {
    return messageKey;
  });
};

export default postMessage;
