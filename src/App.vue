<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="sass">
body
	margin: 0
	width: 100%
	background-color: $bg-color-light

#app
	font-family: Nunito, sans-serif
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	color: $text-color

#nav
	padding: 30px

	a
		font-weight: bold
		color: #2c3e50

		&.router-link-exact-active
			color: #42b983
h2
	margin: 0

ul
	padding: 0

li
	list-style-type: none

.main
	width: 100%

.container
	max-width: 1200px
	margin: 0 auto
	padding: 30px 15px

.grid-row
	display: flex
	flex-flow: row wrap
	justify-content: flex-start
	align-items: stretch
	width: 100%

.grid-item
	flex-basis: 33.33%
	-ms-flex: auto
	position: relative
	padding: 0 15px
	margin-bottom: 30px
	box-sizing: border-box
	@media (max-width: 800px)
		flex-basis: 50%
	@media (max-width: 550px)
		flex-basis: 100%

.btn
	font-family: Nunito, sans-serif
	font-weight: bold
	border: none
	border-radius: 5px
	padding: 10px 20px
	cursor: pointer
	outline: none

.btn-primary
	background-color: $btn-color-primary
	color: #fff
	transition: background-color, 0.3s ease
	&:hover
		background-color: darken($btn-color-primary, 10%)

.btn-success
	background-color: $btn-color-success
	color: #fff
	transition: background-color, 0.3s ease
	&:hover
		background-color: darken($btn-color-success, 10%)

.btn-danger
	background-color: $btn-color-danger
	color: #fff
	transition: background-color, 0.3s ease
	&:hover
		background-color: darken($btn-color-danger, 10%)

.btn-secondary
	background-color: $btn-color-secondary
	color: #fff
	transition: background-color, 0.3s ease
	&:hover
		background-color: darken($btn-color-secondary, 10%)

.actions
	display: flex
	align-items: center
	opacity: 0
	transition: opacity 0.3s ease
	& *
		cursor: pointer
		margin-left: 5px
	.icon-delete
		color: $danger-color
		&:hover
			color: darken($danger-color, 10%)
	.icon-edit
		color: $primary-color
		&:hover
			color: darken($primary-color, 10%)
	@media (hover: none) and (pointer: coarse)
		opacity: 1
.form-item
	display: flex
	flex-direction: column
	margin-bottom: 30px
	position: relative
	label
		margin-bottom: 5px
	input
		outline: none
		border: none
		background-color: $bg-color-light
		border-radius: 5px
		padding: 12px 35px 12px 15px
		box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2)
		transition: background-color 0.3s ease
		color: $text-muted
		&:focus
			background-color: #fff
	.input-buttons
		position: absolute
		bottom: -1px
		right: 0px
		cursor: pointer
		transition: color 0.3s ease
		display: flex
		margin-right: 5px
		.input-button
			padding: 8px 10px
			transition: color 0.3s ease
		.input-button-primary
			color: $primary-color
			&:hover
				color: darken($primary-color, 10%)
		.input-button-danger
			color: $danger-color
			&:hover
				color: darken($danger-color, 10%)

.empty
	color: #b7b7b7
	font-style: italic

.modal-footer
	button
		margin-right: 10px

</style>
