class Inbox{
    timeline: Map<number, Tweet>
    meusTweets: Map<number, Tweet>;

    constructor(){
        this.timeline = new Map<number, Tweet>();
        this.meusTweets = new Map<number, Tweet>();
    }
}

class User{
    inbox: Inbox;
    username: string;
    follower: Map<string, User>;
    following: Map<string, User>;

    constructor(username: string){
        this.inbox = new Inbox();
        this.username = username;
        this.follower = new Map<string, User>();
        this.following = new Map<string, User>();
    }

    seguir(other: User){
        if(this.username != other.username){
            if(!this.following.has(other.username)){
            this.following.set(other.username, other);
            other.following.set(this.username, this);
            }
        }
    }

    enviarTweet(tweet: Tweet){
        this.inbox.timeline(tweet);
        this.inbox.meusTweets(tweet);
    }

    dxSeguir(other: string){
        if(this.following.has(other)){
            this.following.delete(other);
                console.log("deixou de seguir esse uuário")
        }else{
            console.log("este usuário não existe")
        }
    }

    getInbox(){
        return this.inbox;
    }

    toString(): string {
        return "usuário: " + this.username ;
    }
}

class Controller{

}

class Tweet{
    id: number;
    username: string;
    mensage: string;
    likes: string [];
    rt: string [];

    constructor(id: number, username: string, mensage: string,){
        this.id = id;
        this.username = username;
        this.mensage = mensage;
        this.likes = [];
        this.rt = [];
    }

    getId(): number{
        return this.id;
    }

    getMensage(): string{
        return this.mensage;
    }

    like(){
        this.likes.push(this.username);
    }

    getLikes(){
        return this.likes;
    }
}