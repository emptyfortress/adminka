<template lang="pug">
.external
	.zag Внешние хранилища
	q-card.card
		.row.items-baseline
			q-chip(color="warning") Всего групп: 2
			q-chip() Всего хранилищ: 6
			q-chip() Всего правил: 4
			q-space
			q-btn(color="primary" unelevated ) Добавить группу
		.change
			q-icon(name="mdi-information-outline")
			span Все изменения применяются сразу.

		q-expansion-item(switch-toggle-side).grey1
			template(#header)
				.row.items-center.justify-between.full-width
					.flex.items-center.q-gutter-md
						q-icon(name="mdi-folder-settings-outline" size="md")
						.title Common
					div
						q-btn(unelevated flat round icon="mdi-tune-variant" @click.stop)
						q-btn(unelevated flat round icon="mdi-plus-circle" @click.stop)
			q-card.dblist
				component(:is="draggable"
					:list="list1"
					item-key="id"
					group="group"
					class="list-group"
					ghost-class="ghost"
					@start="dragging = true"
					@end="dragging = false")
					template(#item="{element, index}")
						div {{element.name}} - {{index}}

		q-expansion-item(switch-toggle-side).grey1
			template(#header)
				.row.items-center.justify-between.full-width
					.flex.items-center.q-gutter-md
						q-icon(name="mdi-folder-settings-outline" size="md")
						.title Temp files
					div
						q-btn(unelevated flat round icon="mdi-tune-variant" @click.stop)
						q-btn(unelevated flat round icon="mdi-plus-circle" @click.stop)
			q-card.dblist
				component(:is="draggable"
					:list="list2"
					item-key="id"
					group="group"
					class="list-group"
					ghost-class="ghost"
					@start="dragging = true"
					@end="dragging = false")
					template(#item="{element, index}")
						div {{element.name}} - {{index}}
					//- template(#header)
						div this is header

</template>

<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'

const list1 = ref([
	{ name: 'BD digdes', id: 3 },
	{ name: 'BD docsvision', id: 4 },
	{ name: 'BD showcase', id: 5 },
])
const list2 = ref([
	{ name: 'Database 1', id: 0 },
	{ name: 'Database 2', id: 1 },
	{ name: 'temp Database', id: 2 },
])
const dragging = ref(false)
</script>

<style scoped lang="scss">
.external {
	width: clamp(400px, 70%, 1200px);
	margin: 2rem auto;
}

.change {
	margin-top: 1rem;
	margin-bottom: 1rem;

	.q-icon {
		font-size: 1.3rem;
		margin-right: 0.5rem;
	}
}

.grey1 {
	background: #efefef;
	margin-bottom: 0.5rem;
}

.dblist {
	background: transparent;
	padding: 1rem;
}

.list-group > div {
	font-size: 1rem;
	padding: 0.5rem 1rem;
	cursor: pointer;
	background: #efefef;

	&:not(:last-child) {
		border-bottom: 1px solid #0000001a;
	}
}

:deep(.q-item__section--avatar) {
	min-width: initial;
}
</style>
