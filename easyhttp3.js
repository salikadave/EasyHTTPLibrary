/**
 * Easy HTTP Library
 * library for making http requests
 *
 * @version : 3.0.0
 * @author : Salika Dave
 * @license : MIT
 *  **/

class easyHTTP {
  // Make an HTTP GET Request
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const resData = await response.json();
    return resData;
  }
}
