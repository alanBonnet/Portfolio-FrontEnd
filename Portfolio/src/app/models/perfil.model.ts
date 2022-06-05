export class perfil {
    id?: number;
    firstname: string;
    lastname: string;
    aboutMe: string;
    profession: string;
    imgPhoto: string;
    imgBanner: string;
    facebook: string;
    instragram: string;
    twitter: string;
    urlWeb: string;
    linkedin: string;
    constructor(firstname: string,lastname: string,aboutMe: string,profession: string,imgPhoto: string,imgBanner: string,facebook: string,instragram: string,twitter: string,urlWeb: string,linkedin: string) {
        this.firstname=firstname;
        this.lastname = lastname;
        this.aboutMe = aboutMe;
        this.profession=profession;
        this.imgPhoto=imgPhoto;
        this.imgBanner=imgBanner;
        this.facebook=facebook;
        this.instragram=instragram;
        this.twitter=twitter;
        this.urlWeb=urlWeb;
        this.linkedin=linkedin;
    }
}
