import Vue from 'vue';
import 'assets/css/base.css';

const ROOT = 'container'

window.vm = new Vue({
  el: `#${ROOT}`,
  render(h) {
    return <div>
            vue render
           </div>;
  }
});