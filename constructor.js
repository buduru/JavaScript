class userinfo {
  username;
  gender;
  email;

  constructor(username, gender, email) {
    this.username = username;
    this.gender = gender;
    this.email = email;
  }

  display() {
    console.log(this.username, this.gender, this.email);
  }
}

var user1 = new userinfo("bhnau", "male", "bhanu@gmail.com");
var user2 = new userinfo("raj", "male", "raj@gmail.com");

var user3 = new userinfo("swathi", "female", "swathi@gmail.com");

user1.display();
user2.display();
user3.display();
