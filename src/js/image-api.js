import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?';
const API_KEY = '38347219-5115a460498ab3f3455ec2ebc';

export default class ImageSearch {
  constructor() {
    this.searchParam = '';
    this.page = 1;
    this.countImg = 3;
    this.totalImg = 0;
    this.options = {
      params: {
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    };
  }

  async getRequestImg() {
    const response = await axios.get(
      `${BASE_URL}q=${this.searchParam}&per_page=${this.countImg}&page=${this.page}`,
      this.options
    );
    this.incrementPage();
    return response.data;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get param() {
    return this.searchParam;
  }

  set param(newParam) {
    this.searchParam = newParam.replace(' ', '+');
  }

  get countImgToPage() {
    return this.countImg;
  }

  set countImgToPage(value) {
    this.countImg = value;
  }
}
