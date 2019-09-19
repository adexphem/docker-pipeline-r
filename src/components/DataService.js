//PatientDataService
//This method is used to fetch data from the backend(URL'S)
//Here we use AXIOS method from axios library which perform the followoing functions:
//1.GET
//2.POST
//3.DELETE
//4.UPDATE

import axios from 'axios';

class ApiService {
  addPatients(patient) {
    return axios.post('http://localhost:8098/Patient/save', docker, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  editPatients(patient) {
    return axios.put('http://localhost:8098/Patient/update', patient);
  }
}

export default new ApiService();
