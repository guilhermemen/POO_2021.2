class User{
    username: string;
    follower: Map<string, User>;
    following: Map<string, User>;

    constructor(username: string){
        this.username = username;
        this.follower = new Map<string, User>();
        this.following = new Map<string, User>();
    }

    toString(){
        return;
    }

    follow(other: User){
       // this.following.push(other);
        // this.follower.push(other);
    }

    twitar(other: User){
        let Tw = new tweet(this.username)
    }

}

class Controller{

}

class Tweet{
    id: number;
    username: string;
    msg: string;
    likes: set<string>;
    rt: Tweet

    constructor(id: number, username, msg: string){
        this.id = id;
        this.username = username;
        this.msg = msg;
        this.likes = new Set();
        this.rt = 

    }
}