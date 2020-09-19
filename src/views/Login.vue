<template>

    <div class='login-view-container'>
        <div class='welcome-message-login'>
            <h4>{{genericWelcome}}</h4>
            <p>{{welcomeRealtor}}</p>
        </div>
        <b-field>
            <b-input placeholder="email" v-model="username" type="email"></b-input>
        </b-field>
        <b-field>
            <b-input value="" type="password" v-model="password" maxlength="30" placeholder="password"></b-input>
        </b-field>
        <!-- <p>{{URL}}</p> -->
        <b-button @click="handleLogin">Log In</b-button>
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
        // register: function(){
        //     fetch('http://127.0.0.1:8000/auth/users/login/', {
        //         method: 'post',
        //         headers:{
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             email: this.username,
        //             password: this.password
        //         })
        //     })
        //     .then(response => response.json())
        //     .then(data => console.log(data))
        //     .then(data => {
        //         this.$emit('loggedIn', data)
        //     })
        // },
        handleLogin: function(){
            console.log(`${this.$URL} is the login url URL`)
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
</style>