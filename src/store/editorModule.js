// editor 相关 vuex 数据

import { get, set } from '@/utils/storage'

const editorModule = {
    state: {
      post: get("post") || [],
      draft: get("draft") || [],
      show:[],
      size:5,
      pageNum:0,
      search:[],
      
    },
    mutations: {
        ADD_POST: (state, newPost) => {
          //1.获取文章
          let posts = state.post
          posts.unshift(newPost)
          //2.保存
          set("post",posts)
        },
        
        ADD_DRAFT: (state, obj) => {
          //1.获取文章
          let drafts = state.draft
          drafts.unshift(obj)
          //2.保存
          set("draft",drafts)
            
        },

        //获取某一条文章
        GET_POST(state,pid){
          let posts = state.post
          if(posts.length) {
            for(let i=0;i<posts.length;i++) {
              if(posts[i].postId==pid) return posts[i]
            }
            return null
          }
          return null
        },
        GET_DRAFT_ITEM(state, pid) {
          let drafts = state.draft
          if(drafts.length) {
            for(let i=0;i<drafts.length;i++) {
              if(drafts[i].postId==pid) return drafts[i]
            }
            return null
          }
          return null
            // state.draft = get("draft");
            // console.log(state.draft['draft' + pid]);
            // return state.draft['draft' + pid]
        },
        REFRESH_ARTICLE_DATA(state) {
            state.post = get("post");
            state.draft = get("draft");
        },

        //分页获取数据
        GET_NUM_LIST(state,payload) {
          let res = [...state.show]
          res.push(...state.post.slice(state.size*state.pageNum,state.size*state.pageNum+state.size))
          state.show = res
          console.log(res)
          state.pageNum++
        },

        //搜索的数据
        SEARCH(state,search) {
          let res = []
          state.post.forEach(element => {
            if(element.title.includes(search) || element.content.includes(search)) res.push(element)
          });
          state.search = res
        },

        //当前的文章添加评论内容,数组
        COMMENT(state,payload){
          let res = [...state.post]
          res.forEach(item=>{
            if(item.postId==payload.pid) {
              item.comments++
              if(item.commentList) item.commentList.unshift(payload.desc)
              else item.commentList = [payload.desc]
            }
          })
          state.post = res
          set("post",res)
        },

        //收藏
        CANG(state,pid){
          let res = [...state.post]
          res.forEach(item=>{
            if(item.postId==pid) {
              if(item.cang) item.cang = false
              else item.cang = true
            }
          })
          state.post = res
          set("post",res)
        },
        //喜欢
        LOVE(state,pid){
          let res = [...state.post]
          res.forEach(item=>{
            if(item.postId==pid) {
              if(item.love) {
                item.love = false
                item.likes--
              }else {
                item.love = true
                item.likes++
              }
            
            }
          })
          state.post = res
          set("post",res)
        },
    },
    actions: {
    }

}

export default editorModule