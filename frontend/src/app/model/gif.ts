import { Component } from "@angular/core"

@Component({
    template: '',
})

export class Gif {
    
    private _name : string = ""
    private _creator : string = ""
    private _url : string = ""
    private _rating : string = ""

    constructor() {}
    
    public get name() : string {
        return this._name
    }

    
    public set name(v : string) {
        this._name = v;
    }

    public get creator() : string {
        return this._creator
    }

    
    public set creator(v : string) {
        this._creator = v;
    }

    public get url() : string {
        return this._url
    }

    
    public set url(v : string) {
        this._url = v;
    }

    public get rating() : string {
        return this._rating
    }

    
    public set rating(v : string) {
        this._rating = v;
    }
    
    public toJson() {
        return {
            name: this.name,
            creator: this.creator,
            url: this.url,
            rating: this.rating
        }
    }

    public static fromJson(json: any) {
        let gif = new Gif()
        gif.name = json.name 
        gif.creator = json.creator
        gif.url = json.url
        gif.rating = json.rating
        return gif
    }

    public toString() {
        return this._name
    }

}