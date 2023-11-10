<template>
      <div class="  border-[1px] bg-white border-l-0 p-8 block  gap-0.5">
        <div class=" gap-1 items-center px-1 flex flex-wrap">
			<div><button class="border-[1px] border-blue px-1 py-0.5 hover:bg-gray-200 text-sm">ADD NOTE</button></div>
          <input type="color" value="#3b82f6" id="circle"  />
        <select class="bg-gray-50  text-black text-xs font-light    ">
          <option selected>Catagories</option>
          <option value="US">General</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select> 
        <template v-for="(item, index) in items">
         <div 	class="divider" v-if="item.type === 'divider'" :key="`divider${index}`"/>
            <menu-item
            v-else
            :key="index"
            v-bind="item"
          />
        </template>
	    </div>
      <div class="w-full  my-4">
        <input class="w-full text-xl font-bold	 px-2 outline-none" maxlength="50"  type="text" placeholder="Title" />
      </div>
      <div class="flex border-1  px-2 gap-4 text-xs  text-gray-500">
			<div class="inline-flex border-[1px] rounded-full w-4 h-4 justify-center   "><button  >+</button></div>
			 <div> 
				<div>#123</div>
			 </div>
      </div>
      </div>
</template>
<script>
import menuItem from './menuItem.vue'
export default {
  
	components: {
		menuItem,
	},
	props: {
		editor: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {selectedColor: '#000000',
			items: [
        {
					type: 'divider',
				},
				{
					icon: 'bold',
					title: 'Bold',
					action: () => this.editor.chain().focus().toggleBold().run(),
					isActive: () => this.editor.isActive('bold'),
				},
				{
					icon: 'italic',
					title: 'Italic',
					action: () => this.editor.chain().focus().toggleItalic().run(),
					isActive: () => this.editor.isActive('italic'),
				},
				{
					icon: 'strikethrough',
					title: 'Strike',
					action: () => this.editor.chain().focus().toggleStrike().run(),
					isActive: () => this.editor.isActive('strike'),
				},
				{
					icon: 'code-view',
					title: 'Code',
					action: () => this.editor.chain().focus().toggleCode().run(),
					isActive: () => this.editor.isActive('code'),
				},
				{
					icon: 'mark-pen-line',
					title: 'Highlight',
					action: () => this.editor.chain().focus().toggleHighlight().run(),
					isActive: () => this.editor.isActive('highlight'),
				},
				{
					type: 'divider',
				},
				{
					icon: 'h-1',
					title: 'Heading 1',
					action: () => this.editor.chain().focus().toggleHeading({ level: 1 }).run(),
					isActive: () => this.editor.isActive('heading', { level: 1 }),
				},
				{
					icon: 'h-2',
					title: 'Heading 2',
					action: () => this.editor.chain().focus().toggleHeading({ level: 2 }).run(),
					isActive: () => this.editor.isActive('heading', { level: 2 }),
				},
				{
					icon: 'h-3',
					title: 'Heading 3',
					action: () => this.editor.chain().focus().toggleHeading({ level: 3 }).run(),
					isActive: () => this.editor.isActive('heading', { level: 3 }),
				},
				{
					icon: 'paragraph',
					title: 'Paragraph',
					action: () => this.editor.chain().focus().setParagraph().run(),
					isActive: () => this.editor.isActive('paragraph'),
				},
				{
					icon: 'list-unordered',
					title: 'Bullet List',
					action: () => this.editor.chain().focus().toggleBulletList().run(),
					isActive: () => this.editor.isActive('bulletList'),
				},
				{
					icon: 'list-ordered',
					title: 'Ordered List',
					action: () => this.editor.chain().focus().toggleOrderedList().run(),
					isActive: () => this.editor.isActive('orderedList'),
				},
				{
					icon: 'list-check-2',
					title: 'Task List',
					action: () => this.editor.chain().focus().toggleTaskList().run(),
					isActive: () => this.editor.isActive('taskList'),
				},
				{
					icon: 'code-box-line',
					title: 'Code Block',
					action: () => this.editor.chain().focus().toggleCodeBlock().run(),
					isActive: () => this.editor.isActive('codeBlock'),
				},
				{
					type: 'divider',
				},
				{
					icon: 'double-quotes-l',
					title: 'Blockquote',
					action: () => this.editor.chain().focus().toggleBlockquote().run(),
					isActive: () => this.editor.isActive('blockquote'),
				},
				{
					icon: 'separator',
					title: 'Horizontal Rule',
					action: () => this.editor.chain().focus().setHorizontalRule().run(),
				},
				{
					type: 'divider',
				},
				{
					icon: 'text-wrap',
					title: 'Hard Break',
					action: () => this.editor.chain().focus().setHardBreak().run(),
				},
				{
					icon: 'format-clear',
					title: 'Clear Format',
					action: () => this.editor.chain()
						.focus()
						.clearNodes()
						.unsetAllMarks()
						.run(),
				},
				{
					type: 'divider',
				},
				{
					icon: 'arrow-go-back-line',
					title: 'Undo',
					action: () => this.editor.chain().focus().undo().run(),
				},
				{
					icon: 'arrow-go-forward-line',
					title: 'Redo',
					action: () => this.editor.chain().focus().redo().run(),
				},
			],
		}
	}
}
</script>

<style lang="scss" scoped>
.divider {
	background-color: gray;
	height: 1.25rem;
	margin-left: 1rem;
	margin-right: 1rem;
	width: 1px;
}
#circle {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  width: 20px;
  height: 24px;
  border: none;
  cursor: pointer;
}
#circle::-webkit-color-swatch {
  border-radius: 50%;
}
#circle::-moz-color-swatch {
  border-radius: 50%;
}
</style>