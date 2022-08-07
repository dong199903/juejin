// editor 相关 vuex 数据

import { get, set } from '@/utils/storage'

const editorModule = {
    state: {
        post: {},
        draft: {},
    },
    mutations: {
        ADD_POST: (state, newPost) => {
            const temp = get("post");
            if (temp) {
                state.post = temp;
            }
            state.post['post' + newPost.postId] = newPost;
            console.log(state.post);
            set("post", state.post);
        },
        ADD_DRAFT: (state, obj) => {
            const temp = get("draft");
            if (temp) {
                state.draft = temp;
            }
            state.draft['draft' + obj.postId] = obj;
            // console.log(state.draft);
            set("draft", state.draft);
        },
        GET_DRAFT_ITEM(state, pid) {
            state.draft = get("draft");
            console.log(state.draft['draft' + pid]);
            return state.draft['draft' + pid]
        },
        REFRESH_ARTICLE_DATA(state) {
            state.post = get("post");
            state.draft = get("draft");
        }
    },
    actions: {
    }

}

export default editorModule