<script setup lang="ts">
import { roundTo } from 'round-to';
import AppNavigation from '~/components/app-navigation.vue';

const a = roundTo(1.234, 2);
</script>

<template>
	{{ a }}
	<img alt="Vue logo" src="../assets/logo.svg" width="300" />
	<app-navigation />
	<router-view />
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
