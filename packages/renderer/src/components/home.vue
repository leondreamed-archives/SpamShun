<script setup lang="ts">
import { ref } from 'vue';
import { useEmailModule } from '~r/use/email';

const email = ref('');

const emailModule = useEmailModule();
</script>

<template>
	<button @click="email = emailModule.genEmail()">Generate an email!</button>

	<p>
		{{ email }}
	</p>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
	color: #42b983;
}
</style>
