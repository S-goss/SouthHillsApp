<template>
  <div id="container">
    <strong>Interested In Applying? </strong>
    <p>Fill Out This form to get Connected <br> to a recuiter Today!</p>
    <div id="container-form">
      <form>
        <img src="public\assets\icon\SouthHillsWebDark.png" />
        <label>First Name</label><br>
        <input type="text" name="firstName" />
        <br><br>
        <label id="container-form-lastname">Last Name</label><br>
        <input type="text" name="lastName" />
        <br><br>
        <label>Email Address</label><br>
        <input type="email" name="emailAddress" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'Contact',
  props: {
    name: String
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