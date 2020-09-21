<template>

    <div class='login-view-container'>
        <div class='welcome-message-login'>
            <h4>{{genericWelcome}}</h4>
            <p>{{welcomeRealtor}}</p>
        </div>
        <b-field>
            <b-input placeholder="email" v-bind:class="{'error':$attrs.error}" v-model="username" type="email"></b-input>
        </b-field>
        <b-field>
            <b-input value="" v-bind:class="{'error':$attrs.error}"  type="password" v-model="password" maxlength="30" placeholder="password"></b-input>
        </b-field>

        <b-button class="button login-button" @click="login">Log In</b-button>

        <p v-if="$attrs.error" v-bind:class="{'error':$attrs.error}" >
            Log in failed. Invalid username or password. 
        </p>


        <!--FOR REGISTERING
        <b-field label="Username"
        type="is-success"
        message="This username is available">
        <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field> -->
    </div>
</template>



<script>
export default{
    name: "Login",
    props:["URL"],
    data: function(){
        return{
            username:'',
            password:'',
            genericWelcome: 'Welcome back!',
            welcomeRealtor: 'Log in to manage your listings.'
        }
    },
    methods: {
        // Register function not implemented yet 
        register: function(){
            fetch(`${this.$URL}/auth/users/register/`, {
                method: 'post',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: this.username,
                    email: this.username,
                    password: this.password
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.$emit("loggedIn", data)
            })
        },
        login: function(){
            // console.log(`${this.$URL} is the login url URL`)
            fetch(`${this.$URL}/auth/users/login/`, {
                method: 'post',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: this.username,
                    email: this.username,
                    password: this.password
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.$emit("loggedIn", data)
            })
        }
    }
}

</script>

<style>
.welcome-message-login{
    padding: 30px;
}
.welcome-message-login p, .welcome-message-login h4{
    text-align: center;
}
.login-view-container{
    width: 50%;
    min-width: 350px;
    margin: 0 auto; 
    padding: 100px 20px 100px 20px;
}
.button.login-button{
    width: 100%;
    background-color: rgb(240, 240, 240);
}
.button.login-button{
    font-size: .9em;
    margin-bottom: 20px;
}
.error{
    border-color: red 1px solid;
    font-size: .8em;
    color: red;
    text-align: center;
}
</style>