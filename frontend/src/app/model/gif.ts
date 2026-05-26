export class Gif {
  public name: string = '';
  public creator: string = '';
  public url: string = '';
  public rating: string = '';
  public isFavourite: boolean = false;

  public toJson() {
    return {
      name: this.name,
      creator: this.creator,
      url: this.url,
      rating: this.rating,
    };
  }

  public static fromJson(json: any) {
    const gif = new Gif();
    gif.name = json.name;
    gif.creator = json.creator;
    gif.url = json.url;
    gif.rating = json.rating;
    return gif;
  }

  public toString() {
    return this.name;
  }
}
