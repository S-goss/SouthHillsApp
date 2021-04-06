<template>
  <div id="container">
    <img height="50" src="https://www.southhills.edu/wp-content/uploads/2015/07/SouthHillsWeb.jpg" alt="South Hills"/>
    <br>
    <strong>Interested In Applying? </strong>
    <p>Fill Out This form to get Connected <br> to a recuiter Today!</p>
    <div id="container-form">
      <form class="contact-form" @submit.prevent="sendEmail">
        <label>Name</label><br>
        <input type="text" name="user_name">
        <br><br>
        <label>Email</label><br>
        <input type="email" name="user_email">
        <br><br>
        <label>Message</label><br>
        <textarea name="message"></textarea>
        <br><br>
        <input type="submit" value="Send">
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import emailjs from 'emailjs-com';

export default {
  name: 'Contact',
  props: {
    name: String,
  },
  data:function() {
return {

  };
},
methods: {
    sendEmail: () => {
      emailjs.sendForm('service_qzk7u47', 'template_304ws6h', 'user_kNkBUB4XihOOhwsmZgDTU')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  position: relative;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

#container-form 
{
  border-style: solid;
  border-color: grey;
  border-width: medium ;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-right:500px;
  margin-left: 500px;
  padding-top: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 50px;

}
#container-form label
{
  padding-top: 20px;
  padding-bottom: 5px;
}

</style>