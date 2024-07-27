import axios from 'axios';

interface RequestParams {
  url: string;
  params?: Record<string, any>;
  headers?: Record<string, any>;
  data?: any;
}

export class HttpClient {

  static async get({ url, params = {}, headers = {} }: RequestParams): Promise<any> {
    try {
      const response = await axios.get(url, { params, headers });
      return response.data;
    } catch (error) {
      console.error('GET request failed:', error);
      throw error;
    }
  }

  static async post({ url, data = {}, headers = {} }: RequestParams): Promise<any> {
    try {
      const response = await axios.post(url, data, { headers });
      return response.data;
    } catch (error) {
      console.error('POST request failed:', error);
      throw error;
    }
  }

  static async put({ url, data = {}, headers = {} }: RequestParams): Promise<any> {
    try {
      const response = await axios.put(url, data, { headers });
      return response.data;
    } catch (error) {
      console.error('PUT request failed:', error);
      throw error;
    }
  }

  static async delete({ url, params = {}, headers = {} }: RequestParams): Promise<any> {
    try {
      const response = await axios.delete(url, { params, headers });
      return response.data;
    } catch (error) {
      console.error('DELETE request failed:', error);
      throw error;
    }
  }
}
