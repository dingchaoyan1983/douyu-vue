import Vue from 'vue';
import 'assets/css/base.css';
import 'assets/css/scss/index.scss';

import Header from './components/header';
import Sidebar from './components/sidebar';

const ROOT = 'container'

window.vm = new Vue({
  el: `#${ROOT}`,
  render(h) {
    return <div>
             <Header/>
             <Sidebar/>
           </div>;
  }
});
