import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {

    getEmployees(){
        return axios.get(BASE_URL);
    }

    createEmployee(employee){
        return axios.post(BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()