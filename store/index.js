import axios from 'axios';
import Cookie from 'js-cookie'

export const state = () => ({
  posts: [],
  comments: [],
  token: null
});

export const mutations = {
  addPost(state, post) {
    state.posts.push(post);
  },
  setPosts(state, posts) {
    state.posts = posts;
  },
  editPost(state, postEdit) {
    const postIndex = state.posts.findIndex(post => post.id === postEdit.id);
    state.posts[postIndex] = postEdit;
  },
  addComment(state, comment) {
    state.comments.push(comment);
  },
  setToken(state, token) {
    state.token = token;
  },
  destroyToken(state) {
    state.token = null;
  }
};

export const actions = {
  nuxtServerInit({commit}) {
    return axios.get('https://blog-nuxt-888fb-default-rtdb.firebaseio.com/posts.json')
      .then(res => {
        let postsArray = [];
        for (let key in res.data) {
          postsArray.push({...res.data[key], id: key})
        }
        commit('setPosts', postsArray)
      })
  },
  addPost({commit}, post) {
    axios.post('https://blog-nuxt-888fb-default-rtdb.firebaseio.com/posts.json', post)
      .then(res => {
        commit('addPost', {...post, id: res.data.name})
      })
  },
  editPost({commit, state}, post) {
    return axios.put(`https://blog-nuxt-888fb-default-rtdb.firebaseio.com/posts/${post.id}.json?auth=${state.token}`, post)
      .then(res => {
        commit('editPost', post)
      })
      .catch(e => console.error(e))
  },
  addComment({commit}, comment) {
    axios.post('https://blog-nuxt-888fb-default-rtdb.firebaseio.com/comments.json', comment)
      .then(res => {
        commit('addComment', {...comment, id: res.data.name})
      })
  },
  login({commit}, user) {
    const key = 'AIzaSyAD5rs-kJwZLAvZz92PJPKAlIs0tCkA-sE';
    return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    })
      .then(res => {
        let token = res.data.idToken;
        Cookie.set('jwt', token);
        localStorage.setItem('token', token);
        commit('setToken', res.data.idToken)
      })
      .catch(e => console.error(e))
  },
  checkAuth({commit}, request) {
    let token = null;
    if (request) {
      if (!request.headers.cookie) return false;
      const jwtCookie = request.headers.cookie.split(';').find(t => t.trim().startsWith('jwt='));
      if (!jwtCookie) return false;
      token = jwtCookie.split('=')[1]
    } else {
      token = localStorage.getItem('token');
      if (!token) return false;
    }
    commit('setToken', token)
  },
  logout({commit}) {
    Cookie.remove('jwt');
    localStorage.removeItem('token');
    commit('destroyToken')
  },
  register({commit}, user) {
    const key = 'AIzaSyAD5rs-kJwZLAvZz92PJPKAlIs0tCkA-sE';
    return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`, {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    })
      .catch(e => console.error(e))
  }

};
export const getters = {
  getPosts(state) {
    return state.posts;
  },
  checkAuthUser(state) {
    return state.token != null;
  }
};
