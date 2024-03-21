<template lang="pug">
.change Изменения, выполняемые на этой вкладке, применяются сразу.
.outer
	q-splitter(v-model="split1").spl
		template(#before)
			Hran

		template(#after)
			q-splitter(v-model="split2").spl

				template(#before)
					Group

				template(#after)
					Rule
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Group from '@/components/setupcomponent/Group.vue'
import Hran from '@/components/setupcomponent/Hran.vue'
import Rule from '@/components/setupcomponent/Rule.vue'

const split1 = ref(32)
const split2 = ref(42)
</script>

<style scoped lang="scss">
.spl {
	height: calc(100vh - 390px);
}

.outer {
	padding: 1rem;
	background: #fff;
	box-shadow: 0 0 4px rgba($color: #000000, $alpha: 0.3);
}
.change {
	color: darkred;
	background: $primary;
	color: white;
	font-weight: 600;
	font-size: 0.8rem;
	text-align: center;
	margin: 0 auto;
	margin-bottom: 1rem;
	width: 600px;
}
</style>
