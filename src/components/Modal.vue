<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h3>A you sure?</h3>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal"
};
</script>

<style lang="sass" scoped>
.modal-mask
	position: fixed
	z-index: 9998
	top: 0
	left: 0
	width: 100%
	height: 100%
	background-color: rgba(0, 0, 0, 0.5)
	display: table
	transition: opacity 0.3s ease

.modal-wrapper
	display: table-cell
	vertical-align: top
	padding-top: 30px

.modal-header h3
	margin-top: 0

.modal-container
	width: 300px
	margin: 0px auto
	padding: 30px
	background-color: #fff
	border-radius: 5px
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33)
	transition: all 0.3s ease

.modal-default-button
	float: right

.modal-enter
	opacity: 0

.modal-leave-active
	opacity: 0

.modal-enter .modal-container,
.modal-leave-active .modal-container
	-webkit-transform: scale(1.1)
	transform: scale(1.1)
</style>
