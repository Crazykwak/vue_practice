<template>
  <div class="board">
      <router-link to="/textEditor" class="write button" >글쓰기</router-link>
    <table class="board-table">
      <thead>
        <tr>
          <th scope="col" class="th-title">제목</th>
          <th scope="col" class="th-write">글쓴이</th>
          <th scope="col" class="th-date">등록일</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="tableBoard in tableBoards" :key="tableBoard.title">
        <th class="title">
          <a href=""> {{ tableBoard.title }} </a>
        </th>
        <th class="writer">
          <a href=""> {{ tableBoard.write}} </a>
        </th>
        <th> {{ tableBoard.date }} </th>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TextEditor from './TextEditor';

export default {
  name: 'Board',
  data() {
    return {
      tableBoards:
      [
        {
          title: '테스트 제목1',
          write: '글쓴이1',
          date: '2023-03-06',
          view: '1' },
        {
          title: '테스트 제목2',
          write: '글쓴이2',
          date: '2023-03-06',
          view: '2',
        },
      ],
    };
  },
  components: {
    TextEditor,
  },
};
</script>

<style scoped>

.write {
    margin: 10px;
    padding: 0px 6px;
}

.board {
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  padding: 20px;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

.board-table {
  font-size: 13px;
  width: 100%;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.board-table th {
  text-align: left;
}

.board-table a {
  color: #333;
  display: inline-block;
  line-height: 1.4;
  word-break: break-all;
  vertical-align: middle;
}
.board-table a:hover {
  text-decoration: underline;
}

.board-table th {
  text-align: center;
}

.title {
  width: 70%;
}

.writer {
  width: 20%;
}

.th-date {
  width: 10%;
}

.board-table th, .board-table td {
  padding: 14px 0;
}

.board-table tbody td {
  border-top: 1px solid #e7e7e7;
  text-align: center;
}

.board-table tbody th {
  padding-left: 28px;
  padding-right: 14px;
  border-top: 1px solid #e7e7e7;
}

.board-table tbody th p{
  display: none;
}

</style>
