<template>
    <div class="board-editor">
      <OKBoard
        :is-open="isOpen"
        :msg="message"
      ></OKBoard>
      <div class="title">
          <label for="title"> 제목 </label>
          <input type="text" id="title" v-model="form.title">
      </div>
      <div class="editor" v-if="editor">
        <button @click="editor.chain().focus().toggleBold().run()"
                :disabled="!editor.can().chain().focus().toggleBold().run()"
                :class="{ 'is-active': editor.isActive('bold') }">
          bold
        </button>
        <button @click="editor.chain().focus().toggleItalic().run()"
                :disabled="!editor.can().chain().focus().toggleItalic().run()"
                :class="{ 'is-active': editor.isActive('italic') }">
          italic
        </button>
        <button @click="editor.chain().focus().toggleStrike().run()"
                :disabled="!editor.can().chain().focus().toggleStrike().run()"
                :class="{ 'is-active': editor.isActive('strike') }">
          strike
        </button>
        <button @click="editor.chain().focus().toggleCode().run()"
                :disabled="!editor.can().chain().focus().toggleCode().run()"
                :class="{ 'is-active': editor.isActive('code') }">
          code
        </button>
        <button @click="editor.chain().focus().unsetAllMarks().run()">
          clear marks
        </button>
        <button @click="editor.chain().focus().clearNodes().run()">
          clear nodes
        </button>
        <button @click="editor.chain().focus().setParagraph().run()"
                :class="{ 'is-active': editor.isActive('paragraph') }">
          paragraph
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
          h1
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
          h2
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
          h3
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
          h4
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
          h5
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
          h6
        </button>
        <button @click="editor.chain().focus().toggleBulletList().run()"
                :class="{ 'is-active': editor.isActive('bulletList') }">
          bullet list
        </button>
        <button @click="editor.chain().focus().toggleOrderedList().run()"
                :class="{ 'is-active': editor.isActive('orderedList') }">
          ordered list
        </button>
        <button @click="editor.chain().focus().toggleCodeBlock().run()"
                :class="{ 'is-active': editor.isActive('codeBlock') }">
          code block
        </button>
        <button @click="editor.chain().focus().toggleBlockquote().run()"
                :class="{ 'is-active': editor.isActive('blockquote') }">
          blockquote
        </button>
        <button @click="editor.chain().focus().setHorizontalRule().run()">
          horizontal rule
        </button>
        <button @click="editor.chain().focus().setHardBreak().run()">
          hard break
        </button>
        <button @click="editor.chain().focus().undo().run()"
                :disabled="!editor.can().chain().focus().undo().run()">
          undo
        </button>
        <button @click="editor.chain().focus().redo().run()"
                :disabled="!editor.can().chain().focus().redo().run()">
          redo
        </button>
        <editor-content v-if="!isOpen" class="ProseMirror" :editor="editor" />
      </div>
        <input type="submit" value="제출" @click="post">
    </div>

</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { Editor, EditorContent } from '@tiptap/vue-2';
// eslint-disable-next-line import/no-extraneous-dependencies
import StarterKit from '@tiptap/starter-kit';
import OKBoard from '@/components/board/OKBoard';
// eslint-disable-next-line import/no-extraneous-dependencies

export default {
  name: 'TextEditor',

  components: {
    OKBoard,
    EditorContent,
  },
  data() {
    return {
      editor: null,
      form: {
        title: null,
        body: null,
      },
      isOpen: false,
      message: '',
    };
  },
  methods: {
    post() {
      this.$axios.post('/free-board', {
        title: this.form.title,
        body: this.editor.getHTML(),
      }).then((res) => {
        // eslint-disable-next-line
        if (res.status === 201) {
          this.message = '글 잘써짐';
        } else {
          this.message = '글 안써짐';
        }
        this.okBoardSwitch();
      }).catch((err) => {
        // eslint-disable-next-line
        console.log(err);
      });
    },
    okBoardSwitch() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    editable() {
      this.editor.setEditable(this.form.body);
    },
  },
  mounted() {
    this.editor = new Editor({
      content: '<p>This is just a boring paragraph</p>',
      extensions: [
        StarterKit,
      ],
    });
  },
  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>
<style lang="scss">
/* Basic editor styles */

.editor {
    margin: 20px;
}

.ProseMirror {
  > * + * {
      margin: 0.7rem;
      padding: 0.1rem;
  }

  ul,
  ol {
      padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      line-height: 1.1;
  }

  code {
      background-color: rgba(97, 97, 97, 0.1);
      color: #616161;
  }

  pre {
        background: #0D0D0D;
        color: #FFF;
        font-family: 'JetBrainsMono', monospace;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;

    code {
        color: inherit;
        padding: 0;
        background: none;
        font-size: 0.8rem;
    }
  }

  img {
      max-width: 100%;
      height: auto;
  }

  blockquote {
      padding-left: 1rem;
      border-left: 2px solid rgba(13, 13, 13, 0.1);
  }

  hr {
      border: none;
      border-top: 2px solid rgba(13, 13, 13, 0.1);
      margin: 2rem 0;
  }
}
</style>
