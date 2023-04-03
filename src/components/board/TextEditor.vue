<template>
    <div>
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
            <button :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
                Bold
            </button>
        </editor-menu-bar>
        <editor-content :editor="editor" />
    </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Bold } from 'tiptap-extensions';

export default {
  name: 'TextEditor',

  components: {
    EditorContent,
    EditorMenuBar,
  },
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    this.editor = new Editor({
      content: '<p>This is just a boring paragraph</p>',
      extensions: [
        new Bold(),
      ],
    });
  },
  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>

<style scoped>

</style>
