<script setup lang="ts">
import { ref } from 'vue'
import Group from '@/components/setupcomponent/Group.vue'
import Hran from '@/components/setupcomponent/Hran.vue'
import Rule from '@/components/setupcomponent/Rule.vue'

const split1 = ref(32)
const split2 = ref(42)
</script>

<template lang="pug">
div
	.change Изменения в этом разделе применяются сразу.
	.outer
		q-splitter.spl(v-model="split1")
			template(#before)
				Hran
				// div Hran

			template(#after)
				q-splitter.spl(v-model="split2")

					template(#before)
						Group

					template(#after)
						Rule
</template>

<style scoped lang="scss">
.spl {
	height: initial;
	min-height: 200px;
}

.outer {
	margin-left: 2rem;
	padding: 1rem;
	// background: #fff;
	// box-shadow: 0 0 4px rgba($color: #000000, $alpha: 0.3);
}
.change {
	color: darkred;
	background: darkred;
	color: white;
	font-weight: 600;
	font-size: 0.8rem;
	margin-bottom: 1rem;
	margin-left: 2rem;
	padding: 0 1rem;
	display: inline-block;
}
</style>
