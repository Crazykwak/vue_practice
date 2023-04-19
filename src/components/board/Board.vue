<template>
  <div class="board">
      <div>
          <router-view></router-view>
      </div>
      <div class="menu-box">
          <router-link to="/textEditor" class="write btn" >글쓰기</router-link>
      </div>
    <table class="board-table">
      <thead>
        <tr>
          <th scope="col" class="th-title">제목</th>
          <th scope="col" class="th-write">글쓴이</th>
          <th scope="col" class="th-date">등록일</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="tableBoard in tableBoards" :key="tableBoard.id">
        <td class="title">
          <router-link :to="{name: 'detail', params: {id: tableBoard.id}}">
              {{ tableBoard.title }}
          </router-link>
        </td>
        <td class="writer">
          <router-link to=""> {{ tableBoard.write}} </router-link>
        </td>
        <th> {{ tableBoard.createdAt }} </th>
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
      [],
    };
  },
  components: {
    TextEditor,
  },
  mounted() {
    this.$axios.get('/free-board?page=1&size=10')
      .then((res) => {
        res.data.content.forEach((e) => {
          this.tableBoards.push({
            id: e.id,
            title: e.title,
            write: e.userId,
            createdAt: e.createdAt,
          });
        });
      }).catch((error) => {
      // eslint-disable-next-line
        console.log(error);
      });
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
  text-align: left;
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

.btn {
    padding: 10px;
    margin: 10px;
    background-color: #7969b9;
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
