<template>
  <form>
    <input v-model="username" class="form-control" type="text" placeholder="введите логин">
    <input v-model="password" class="form-control" type="text" placeholder="введите пароль">
    <button @click="signIn" class="btn btn-success">войти</button>
  </form>
</template>
<p v-if="token">вы авторизованы!</p>
<script>

export default {
  data(){
    return{
      token: null,
      username:null,
      password: null,
      error: null,
    }
  },
  methods:{
    signIn(){
      fetch('https://dummyjson.com/auth/login',{
        method: 'post',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({
          username: this.username,
          password: this.password,
          expiresInMins: 30,
        })
      })
          .then(res => res.json)
          .then(data => this.token = data.token)
            if(data.message) {
              this.error = data.message;
            } else {
              this.token = data.token
              localStorage.setItem('token', data.token)
            }
    }
  }
}
</script>

/*"username":atuny0,
/*password": 9uQFF1Lh