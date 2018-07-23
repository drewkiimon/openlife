import axios from "axios";

export const FETCH_PROPERTY = "FETCH_PROPERTY";
export const FETCH_ENTITY = "FETCH_ENTITY";
export const FETCH_ASSOCIATION = "FETCH_ASSOCIATION";

const ROOT_URL = "https://api.openlattice.com/datastore/edm/";
const TYPE = "/type";

export function fetchProperty() {
  console.log(`${ROOT_URL}property${TYPE}`);
  const request = axios.get(`${ROOT_URL}property${TYPE}`);
  console.log("request", request);
  return {
    type: FETCH_PROPERTY,
    payload: request
  };
}

export function fetchEntity() {
  const request = axios.get(`${ROOT_URL}entity${TYPE}`);

  return {
    type: FETCH_ENTITY,
    payload: request
  };
}

export function fetchAssociation() {
  const request = axios.get(`${ROOT_URL}association${TYPE}`);

  return {
    type: FETCH_ASSOCIATION,
    payload: request
  };
}
