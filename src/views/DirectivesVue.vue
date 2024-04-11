<template>
<section class="m-4">

  <h3>Декларативная отрисовка</h3>
  <p>{{message}}</p>

  <h3>директива в-модел</h3>
  <form class="form-control" action="#" method="post">
    <input v-model="login" class="input-group m-2" type="text" name="login" value="" placeholder="введите логин">
    <p class="m-2">Ваш логин {{login}}</p>
  </form>

  <h3>директива v-if</h3>
  <div v-if="seen">
    <p>этот блок виден так как seen - истина</p>
    <p>а второй блок не виден и убран из DOM дерева</p>
  </div>
  <div v-if="!seen">
    <p>второй блок</p>
  </div>
  <h3>директива v-show</h3>
  <div v-show="seen">
    <p>этот блок виден так как seen - истина</p>
    <p>а второй блок не виден с помощью атрибута style="display:none;" </p>
  </div>
  <div v-show="!seen">
    <p>второй блок</p>
  </div>
  <h3>директива v-for</h3>
  <div>
    <p>список фруктов</p>
    <ol>
      <li v-for="fruit in fruits">{{fruit}}</li>
    </ol>
  </div>
  <h3>иректива в-фор массив</h3>
  <div>
    <p>список студентов:</p>
    <ul>
      <li v-for="student in students">
        ФИО: {{student.fio}}<br>
        дата рожденич: {{student.birth}}<br>
        пол: {{student.sex}}
      </li>
    </ul>
  </div>
  <h3>директива вбинд</h3>
  <div>
    <img :class="{img: active}" v-bind:src="bind_img" v-bind:alt="bind_value" :title="bind-value">
  <h3>директива в-он</h3>
  </div>
  <div>
    <button v-on:click="active_true" class="btn btn-success">active: true</button>
    <button @click="active_false" class="btn btn-success m-1">active: false</button>
  </div>
</section>
</template>
<script>
export default {
  data(){
    return{
      message: "приветствую вас на курсе по изучению фреймворка вуе3",
      login: null,
      seen: true,
      fruits: ["яблыка", "бонан", "опелисин", "лемон"],
      students: [
        {
          fio: "Галацан Иван Павлович",
          birth: '22.05.2006',
          sex: "мужской"
        },
        {
          fio: "Гофман Игорь",
          birth: '17.08.2006',
          sex: '29.03.2006',
        },
        {
          fio: "Огинский Иван Станиславович",
          birth: '29.03.2006',
          sex: "неопределн",
        }
      ],
      bind_img: 'https://sun9-15.userapi.com/impg/_SMtsB15lLShL3KfjIjvuOa3I8TY0i0vbzlB9A/XnABzOxVbGU.jpg?size=518x500&quality=95&sign=3c2977e16689b88ffd296029774e22a4&type=album',
      bind_value: "/",
      active: true,
    }
  },
  methods: {
    active_true(){
      this.active = true
    },
    active_false(){
      this.active = false
    }
  }
}
</script>

<style scoped>
    .img{
      width: 300px;
    }
</style>