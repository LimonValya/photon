import { createStore } from 'vuex';
import { authModule } from './authModule.js';

export default createStore({
state: {

},

modules: {
auth: authModule
}
})
