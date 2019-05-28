import axios from 'axios';

let axiosOpts = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
};

export class Result {
  data;
  errors;

  get hasErrors() {
    return this.errors !== null && Array.isArray(this.errors) && this.errors.length > 0;
  }

  constructor(data, ...errors) {
    this.data = data;
    this.errors = errors[0] === undefined || errors[0] === null ? [] : errors;
  }
}

export default class ContactService {

  static async list() {
    var axiosResult = null;
    var result = null;

    try {
      axiosResult = await axios.get('/api/contacts/getAll');
      result = new Result(axiosResult.data.contacts, axiosResult.data.errors);
    }
    catch(error){
      result = new Result(null, error.message);
    }
    return result;
  }

  static async update(values) {
    var axiosResult = null;
    var result = null;

    try {
      axiosResult = await axios.put(`/api/contacts/update/${values.id}`, values, axiosOpts);
      result = new Result(axiosResult.data, axiosResult.data.errors);

    }
    catch(error) {
      result = new Result(null, error.message);
    }
    return result;
  }

  static async delete(id) {
    var axiosResult = null;
    var result = null;

    try {
      axiosResult = await axios.delete(`/api/contacts/delete/${id}`, axiosOpts)
      result = new Result(axiosResult.data, axiosResult.data.errors);
    }
    catch (error) {
      result = new Result(null, error.message);
    }
    return result;
  }

  static async add(values) {
    var axiosResult = null;
    var result = null;

    try {
      axiosResult = await axios.post(`/api/contacts/create`, values, axiosOpts);
      result = new Result(axiosResult.data, axiosResult.data.errors);
    }
    catch (error) {
      result = new Result(null, error.message);
    }
    return result;
  }
}