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
            if (temp != undefined) {
                state.post = temp;
            } else {
                set("post", {});
            }
            state.post['post' + newPost.postId] = newPost;
            console.log(state.post);
            set("post", state.post);
        },
        ADD_DRAFT: (state, obj) => {
            const temp = get("draft");
            if (temp != undefined) {
                state.draft = temp;
            } else {
                set("draft", {});
            }
            console.log(state.draft);
            state.draft['draft' + obj.postId] = obj;
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