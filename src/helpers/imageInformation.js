export default class ImageInformation  {
  constructor (title, content, image) {
    this.title = title;
    this.content = content;
    this.image = image;
    this.baseUrl = 'https://res.cloudinary.com/varnebla/image/upload/';
  }

  getImageName() {
    return this.image.replace(this.baseUrl, '');
  }
}