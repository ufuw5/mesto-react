const url = 'https://mesto.nomoreparties.co/v1/cohort-15';
const token = 'c791e527-e4b7-4175-8eba-6e62f06389ee';

class Api {
  constructor(options) {
    this.options = options;
  }

  _sendQuery(url, options) {
    return fetch(url, options).then((res) => {
      if (res.ok) { return res.json(); }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  getInitialCards() {
    return this._sendQuery(`${this.options.baseUrl}/cards`, {
      method: 'GET',
      headers: this.options.headers
    });
  }

  setCard(card) {
    return this._sendQuery(`${this.options.baseUrl}/cards`, {
      method: 'POST',
      headers: this.options.headers,
      body: JSON.stringify(card)
    });
  }

  deleteCard(id) {
    return this._sendQuery(`${this.options.baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this.options.headers
    });
  }

  changeLikeCardStatus(id, isLiked) {
    return this._sendQuery(`${this.options.baseUrl}/cards/likes/${id}`, {
      method: isLiked ? 'PUT' : 'DELETE',
      headers: this.options.headers,
    });
  }

  getUserInfo() {
    return this._sendQuery(`${this.options.baseUrl}/users/me`, {
      method: 'GET',
      headers: this.options.headers
    });
  }

  setUserInfo(info) {
    return this._sendQuery(`${this.options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.options.headers,
      body: JSON.stringify(info)
    });
  }

  setUserAvatar(avatar) {
    return this._sendQuery(`${this.options.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.options.headers,
      body: JSON.stringify(avatar)
    });
  }
}

const api = new Api({
  baseUrl: url,
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
});

export default api;
