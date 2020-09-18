<template>

    <div class='login-view-container'>
        <b-field>
            <b-input placeholder="email" v-model="username" type="email"></b-input>
        </b-field>
        <b-field>
            <b-input value="" type="password" v-model="password" maxlength="30" placeholder="password"></b-input>
        </b-field>

        <b-button @click="handleLogin">Login</b-button>
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
            fetch(`${URL}/auth/users/login/`, {
                method: 'post',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: this.email,
                    password: this.password
                })
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .then(data => {
                this.$emit('loggedIn', data)
            })
        }
    }
}

</script>

<style>
    .login-view-container{
        width: 50%;
        margin: 0 auto; 
        padding: 100px 20px 100px 20px;
    }
</style>